"use client"

import type { FormEvent } from "react"
import { BookOpen, Github, Mail, MessageCircle } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ContactSectionProps = {
  onSubmitted?: () => void
}

export function ContactSection({ onSubmitted }: ContactSectionProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    form.reset()
    onSubmitted?.()
    toast.success("Message sent. We will get back to you soon.")
  }

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center mb-10">
        <Badge variant="outline" className="mb-4">Get In Touch</Badge>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Need help or have questions?
        </h2>
        <p className="text-lg text-muted-foreground">
          Our team is here to help you get the most out of Gleem.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 order-2 lg:order-1">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Discord Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Join our active community for quick help and discussions with other business owners.
              </p>
              <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                <a href="https://discord.com/invite/XEQhPc9a6p" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                GitHub Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Report bugs, request features, or share feedback on the project.
              </p>
              <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                <a href="https://github.com/vasilisgee/gleem-landing/issues" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Browse guides and best practices for setup and customization.
              </p>
              <Button variant="outline" size="sm" className="cursor-pointer" asChild>
                <a href="#">
                  View Docs
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 order-1 lg:order-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input
                      id="contact-first-name"
                      name="firstName"
                      placeholder="John"
                      required
                      minLength={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input
                      id="contact-last-name"
                      name="lastName"
                      placeholder="Doe"
                      required
                      minLength={2}
                    />
                  </div>
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
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    placeholder="General inquiry"
                    required
                    minLength={5}
                  />
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
                    className="min-h-40"
                    required
                    minLength={10}
                  />
                </div>

                <Button type="submit" className="w-full cursor-pointer">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

