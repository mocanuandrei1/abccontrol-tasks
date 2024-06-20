"use client";
import { register } from "@/actions/user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { SubmitButton } from "@/components/custom ui/SubmitButton";

const CreateUser = () => {
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "",
    },
  });

  return (
    <Form {...form}>
      <form action={register} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="popescuionel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parola</FormLabel>
              <FormControl>
                <Input type="password" placeholder="tarzan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                name={field.name}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      ref={field.ref}
                      placeholder="Selecteaza un rol"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="dispecerat">Dispecerat</SelectItem>
                  <SelectItem value="tehnician">Tehnician</SelectItem>
                  <SelectItem value="facturare">Facturare</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <SubmitButton text="Adauga" size="lg" variant="default" />
      </form>
    </Form>
  );
};

export default CreateUser;
