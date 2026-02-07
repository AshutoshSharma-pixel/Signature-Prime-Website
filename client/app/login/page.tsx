"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { Chrome, Facebook, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Forgot Password State
    const [showReset, setShowReset] = useState(false);
    const [resetEmail, setResetEmail] = useState("");

    const router = useRouter();
    const { signInWithGoogle, signInWithEmail, resetPassword } = useAuth();


    const handleGoogleSignIn = async () => {
        try {
            setError("");
            setLoading(true);
            await signInWithGoogle();
            router.push("/");
        } catch (error: any) {
            setError(error.message || "Failed to sign in with Google");
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await signInWithEmail(formData.email, formData.password);
            router.push("/");
        } catch (error: any) {
            setError(error.message || "Failed to sign in");
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resetEmail) {
            setError("Please enter your email address");
            return;
        }

        try {
            setError("");
            setSuccess("");
            setLoading(true);
            await resetPassword(resetEmail);
            setSuccess("Password reset email sent! Please check your inbox and spam folder.");
        } catch (error: any) {
            setError(error.message || "Failed to send reset email");
        } finally {
            setLoading(false);
        }
    };


    return (
        <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-prime-gold/10 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-lg bg-white p-12 md:p-14 shadow-2xl rounded-lg border-t-4 border-prime-gold relative">
                {/* Close Button */}
                <button
                    onClick={() => router.push("/")}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-serif text-black mb-3">
                        {showReset ? "Reset Password" : "Welcome Back"}
                    </h1>
                    <p className="text-gray-500 text-sm tracking-wide">
                        {showReset ? "Enter your email to receive reset instructions" : "Sign in to your account"}
                    </p>

                    {error && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-red-600 text-sm">{error}</p>
                        </div>
                    )}

                    {success && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                            <p className="text-green-600 text-sm">{success}</p>
                        </div>
                    )}
                </div>

                {showReset ? (
                    // RESET PASSWORD FORM
                    <form onSubmit={handleResetPassword} className="space-y-7">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-prime-gold/20 focus:border-prime-gold outline-none transition-all !bg-white !text-black placeholder:text-gray-400"
                                placeholder="name@example.com"
                                onChange={(e) => setResetEmail(e.target.value)}
                                value={resetEmail}
                            />
                        </div>

                        <Button
                            type="submit"
                            style={{ backgroundColor: '#D4AF37', color: '#000000' }}
                            className="w-full py-4 text-base font-semibold uppercase tracking-widest shadow-lg hover:bg-prime-accent hover:!text-black"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Reset Link"}
                        </Button>

                        <div className="text-center mt-6">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowReset(false);
                                    setError(""); // Clear errors when switching back
                                    setSuccess("");
                                }}
                                className="text-gray-500 hover:text-black font-medium text-sm transition-colors"
                            >
                                Back to Sign In
                            </button>
                        </div>
                    </form>
                ) : (
                    // LOGIN FORM
                    <>
                        <form onSubmit={handleEmailSubmit} className="space-y-7">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-prime-gold/20 focus:border-prime-gold outline-none transition-all !bg-white !text-black placeholder:text-gray-400"
                                    placeholder="name@example.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-prime-gold/20 focus:border-prime-gold outline-none transition-all !bg-white !text-black placeholder:text-gray-400"
                                    placeholder="••••••••"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 text-gray-600">
                                    <input type="checkbox" className="rounded text-prime-gold focus:ring-prime-gold" />
                                    Remember me
                                </label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowReset(true);
                                        setError("");
                                        setSuccess("");
                                    }}
                                    className="text-black hover:text-prime-gold font-medium transition-colors"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <Button
                                type="submit"
                                style={{ backgroundColor: '#D4AF37', color: '#000000' }}
                                className="w-full py-4 text-base font-semibold uppercase tracking-widest shadow-lg hover:bg-prime-accent hover:!text-black"
                                disabled={loading}
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </Button>
                        </form>

                        <div className="mt-8 text-center space-y-3">
                            <p className="text-sm text-gray-500 mb-2">Or continue with</p>
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-gray-200 rounded-md hover:border-prime-gold hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Chrome size={20} className="text-gray-600" />
                                <span className="text-gray-700 font-semibold">Continue with Google</span>
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-600">
                            Not a member yet? <Link href="/signup" className="text-prime-gold font-medium hover:underline">Register Now</Link>
                        </p>
                    </>
                )}
            </div>
        </main>
    );
}
