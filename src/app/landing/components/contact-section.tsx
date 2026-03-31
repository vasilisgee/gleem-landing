"use client"

import { useState, type FormEvent } from "react"
import { CircleHelp, LoaderCircle, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { showPeepSuccessToast } from "@/lib/peep-toast"

type ContactSectionProps = {
  onSubmitted?: () => void
}

export function ContactSection({ onSubmitted }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subject, setSubject] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)

    window.setTimeout(() => {
      form.reset()
      setSubject("")
      onSubmitted?.()
      setIsSubmitting(false)

      window.setTimeout(() => {
        showPeepSuccessToast("Thanks for reaching out!", {
          description: "We'll get back to you within few hours during business days.",
        })
      }, 350)
    }, 900)
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-4xl mb-4 mt-4">
          Need help or have questions?
        </h2>
        <p className="lg:text-lg text-muted-foreground">
          Our team is here to help you get the most out of Gleem.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 order-2 lg:order-1">
          <Card className="hover:shadow-xl gap-1 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CircleHelp className="h-5 w-5 text-primary" />
                Check our FAQ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Most questions are answered there like pricing, process and timelines.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl gap-1 transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary " />
                We reply fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Send us a message and expect a reply within a few hours during business days.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl gap-1 transition-shadow ">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Prefer email?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Skip the form and drop us a line at <a href="#" className="font-semibold underline">hello@gleem.dev</a>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="order-1 lg:col-span-2 lg:order-2">
          <div className="relative ">
            <div className="pointer-events-none absolute left-40 top-75 h-140 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

            <Card className="relative mx-auto w-full border-border/70 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="mx-auto w-full space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-first-name" className="text-sm font-medium">
                      Your name
                    </label>
                    <Input
                      id="contact-first-name"
                      name="firstName"
                      placeholder="John Doe"
                      className="bg-white dark:bg-input/30"
                      required
                      minLength={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white dark:bg-input/30"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select
                      name="subject"
                      required
                      value={subject}
                      onValueChange={setSubject}
                    >
                      <SelectTrigger
                        id="contact-subject"
                        className="w-full bg-white dark:bg-input/30 dark:hover:bg-input/50"
                        aria-label="Subject"
                      >
                        <SelectValue placeholder="Choose a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">I want a website</SelectItem>
                        <SelectItem value="question">I have a question</SelectItem>
                        <SelectItem value="other">Something else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us how we can help..."
                      rows={8}
                      className="min-h-40 bg-white dark:bg-input/30"
                      required
                      minLength={10}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="button-shine-sweep w-full cursor-pointer text-base"
                    disabled={isSubmitting}
                  >
                    <span className="button-shine-sweep__label flex items-center justify-center gap-2">
                      {isSubmitting ? <LoaderCircle className="size-4 animate-spin" /> : "Send Message"}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
