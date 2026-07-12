import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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

const RequiredLabel = ({ children }: { children: string }) => (
  <FormLabel>
    {children} <span className="text-red-600">*</span>
  </FormLabel>
);

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: "", lastName: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    const inquiryLabel = inquiryTypes.find((t) => t.value === values.inquiryType)?.label ?? values.inquiryType;
    setSubmitting(true);

    const payload = {
      _subject: `Boulai contact: ${inquiryLabel} - ${values.firstName} ${values.lastName}`,
      _template: "table",
      _autoresponse: AUTO_RESPONSE_MESSAGE,
      _replyto: values.email,
      "First name": values.firstName,
      "Last name": values.lastName,
      email: values.email,
      Company: values.company,
      "Inquiry type": inquiryLabel,
      Message: values.message,
    };

    const nativeForm = document.createElement("form");
    nativeForm.method = "POST";
    nativeForm.action = CONTACT_ENDPOINT;
    nativeForm.target = "contact-submit-frame";
    nativeForm.style.display = "none";

    Object.entries(payload).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      nativeForm.appendChild(input);
    });

    document.body.appendChild(nativeForm);
    nativeForm.submit();
    nativeForm.remove();

    toast({ title: "Thanks!", description: "We've received your message and will be in touch." });
    form.reset();
    setSubmitting(false);
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="premium-panel p-8 md:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <RequiredLabel>First name</RequiredLabel>
                        <FormControl>
                          <Input required autoComplete="given-name" {...field} />
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
                          <Input required autoComplete="family-name" {...field} />
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
                          <Input required autoComplete="organization" {...field} />
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
                        <Textarea required rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" disabled={submitting} className="w-full">
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
                <iframe className="hidden" name="contact-submit-frame" title="Contact form submission" />
              </form>
            </Form>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
