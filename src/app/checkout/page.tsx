"use client";

import { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import Services from "@/components/reuseable/Services";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("direct-bank");

  return (
    <div className="min-h-screen bg-[#FAF3EA]">
      {/* Hero Section */}
      <div className="bg-[url('/images/cat1.png')] bg-cover bg-center py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Checkout</h1>
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="text-black hover:text-[#B88E2F]">
              Home
            </Link>
            <span>→</span>
            <span className="text-[#9F9F9F]">Checkout</span>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Billing Details Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="companyName">Company Name (Optional)</Label>
                <Input id="companyName" />
              </div>

              <div>
                <Label htmlFor="country">Country / Region</Label>
                <Select defaultValue="sri-lanka">
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="streetAddress">Street address</Label>
                <Input id="streetAddress" required />
              </div>

              <div>
                <Label htmlFor="city">Town / City</Label>
                <Input id="city" required />
              </div>

              <div>
                <Label htmlFor="province">Province</Label>
                <Select defaultValue="western">
                  <SelectTrigger>
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="western">Western Province</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="zipCode">ZIP code</Label>
                <Input id="zipCode" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="additionalInfo">Additional information</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Notes about your order"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Asgaard sofa × 1</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span>Subtotal</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span>Total</span>
                  <span className="text-[#B88E2F] font-bold">
                    Rs. 250,000.00
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <RadioGroup
                  defaultValue="direct-bank"
                  onValueChange={setPaymentMethod}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="direct-bank" id="direct-bank" />
                      <Label htmlFor="direct-bank">Direct Bank Transfer</Label>
                    </div>
                    {paymentMethod === "direct-bank" && (
                      <p className="text-sm text-[#9F9F9F] ml-6">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    )}
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Cash On Delivery</Label>
                    </div>
                  </div>
                </RadioGroup>

                <div className="mt-6 text-sm text-[#9F9F9F]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <Link href="/privacy-policy" className="text-[#B88E2F]">
                    privacy policy
                  </Link>
                  .
                </div>

                <Button className="w-full mt-6 bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white">
                  Place order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <Services />
    </div>
  );
}
