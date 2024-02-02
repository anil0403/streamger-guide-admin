"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
      if (response?.status === 200) {
        router.push("/");
        toast({
          description: "Login Successful",
        });
      } else {
        toast({
          description: "Login Failed",
        });
      }
    } catch (error) {
      toast({
        description: "Someting went wrong! (Internal Server Error)",
      });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter credentials to login...</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Email</Label>
                <Input
                  onChange={(e: any) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Enter you email..."
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="framework">Password</Label>
                <Input
                  onChange={(e: any) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Enter you password..."
                />
              </div>
              <Button className="w-full" variant="default" type="submit">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
