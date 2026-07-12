import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const inquiryTypes = [
  { value: "demo", label: "Demo & Product" },
  { value: "general", label: "General Info" },
  { value: "partnership", label: "Collaboration & Partnership" },
  { value: "careers", label: "Careers" },
] as const;

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Required"),
  lastName: z.string().trim().min(1, "Required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().trim().min(1, "Required"),
  inquiryType: z.enum(["demo", "general", "partnership", "careers"], {
    required_error: "Select an inquiry type",
  }),
  message: z.string().trim().min(1, "Required"),
});

type ContactValues = z.infer<typeof contactSchema>;

const CONTACT_ENDPOINT =
  (import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined)?.trim() ||
  "https://formsubmit.co/3537b9bf0f25d9b95ffc7c0cc663f81f";

const AUTO_RESPONSE_MESSAGE =
  "Thank you for contacting Boulai. We have received your message and the Boulai team will get back to you soon.";

const CONTACT_SUCCESS_URL = "https://boulai.org/contact?sent=1";

const RequiredLabel = ({ children }: { children: string }) => (
  <FormLabel>
    {children} <span className="text-red-600">*</span>
  </FormLabel>
);

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const contactFormRef = useRef<HTMLFormElement>(null);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: "", lastName: "", email: "", company: "", message: "" },
  });

  const firstName = form.watch("firstName");
  const lastName = form.watch("lastName");
  const email = form.watch("email");
  const company = form.watch("company");
  const inquiryType = form.watch("inquiryType");
  const message = form.watch("message");
  const inquiryLabel = inquiryTypes.find((t) => t.value === inquiryType)?.label ?? "";
  const contactName = [firstName, lastName].filter(Boolean).join(" ");
  const subject = `Boulai contact: ${inquiryLabel || "New inquiry"}${contactName ? ` - ${contactName}` : ""}`;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      toast({
        title: "Message sent.",
        description: "A member of the Boulai team will contact you as soon as possible.",
      });
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [toast]);

  const openSubmitConfirmation = async () => {
    const isValid = await form.trigger(undefined, { shouldFocus: true });
    if (isValid) setConfirmOpen(true);
  };

  const submitConfirmedMessage = () => {
    setSubmitting(true);
    setConfirmOpen(false);
    window.setTimeout(() => {
      const currentForm = contactFormRef.current;
      if (!currentForm) return;
      if (currentForm.requestSubmit) {
        currentForm.requestSubmit();
      } else {
        currentForm.submit();
      }
    }, 0);
  };

  const onNativeSubmit = () => {
    setSubmitting(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-hero border-b border-white/10 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <FadeIn>
            <p className="inverse-eyebrow mb-5">Contact</p>
            <h1 className="page-title mb-7">
              Let's talk.
            </h1>
            <p className="text-lg leading-relaxed text-white/[66%]">
              <span className="block">Tell us about your team and what you're trying to solve. Prefer to write directly?</span>
              <span className="block">
                Reach us at <span className="text-white">hello@boulai.org</span>.
              </span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-deep py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <FadeIn>
            <Form {...form}>
              <form
                ref={contactFormRef}
                action={CONTACT_ENDPOINT}
                method="POST"
                onSubmit={onNativeSubmit}
                className="premium-panel p-8 md:p-10 space-y-6"
              >
                <input type="hidden" name="_subject" value={subject} readOnly />
                <input type="hidden" name="_template" value="table" readOnly />
                <input type="hidden" name="_autoresponse" value={AUTO_RESPONSE_MESSAGE} readOnly />
                <input type="hidden" name="_replyto" value={email || ""} readOnly />
                <input type="hidden" name="_next" value={CONTACT_SUCCESS_URL} readOnly />
                <input type="hidden" name="First name" value={firstName || ""} readOnly />
                <input type="hidden" name="Last name" value={lastName || ""} readOnly />
                <input type="hidden" name="Company" value={company || ""} readOnly />
                <input type="hidden" name="Inquiry type" value={inquiryLabel} readOnly />
                <input type="hidden" name="Message" value={message || ""} readOnly />

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <RequiredLabel>First name</RequiredLabel>
                        <FormControl>
                          <Input required autoComplete="given-name" {...field} name={undefined} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <RequiredLabel>Last name</RequiredLabel>
                        <FormControl>
                          <Input required autoComplete="family-name" {...field} name={undefined} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <RequiredLabel>Email</RequiredLabel>
                        <FormControl>
                          <Input required type="email" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <RequiredLabel>Company</RequiredLabel>
                        <FormControl>
                          <Input required autoComplete="organization" {...field} name={undefined} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <RequiredLabel>Inquiry type</RequiredLabel>
                      <input className="sr-only" tabIndex={-1} required value={field.value ?? ""} readOnly />
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an inquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {inquiryTypes.map((t) => (
                            <SelectItem key={t.value} value={t.value}>
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <RequiredLabel>Message</RequiredLabel>
                      <FormControl>
                        <Textarea required rows={5} {...field} name={undefined} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="button" size="lg" disabled={submitting} className="w-full" onClick={openSubmitConfirmation}>
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </Form>
            <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Send this message?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your request will be sent to the Boulai team using the details you provided.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Review</AlertDialogCancel>
                  <AlertDialogAction onClick={submitConfirmedMessage}>Confirm and send</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
