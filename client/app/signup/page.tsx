"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { Chrome, Facebook, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";


export default function SignupPage() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { signInWithGoogle, signUpWithEmail } = useAuth();


    // Cleanup
    useEffect(() => {
        return () => {
            if ((window as any).recaptchaVerifier) {
                try {
                    (window as any).recaptchaVerifier.clear();
                } catch (e) { }
            }
        };
    }, []);

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

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            setError("");
            setLoading(true);
            await signUpWithEmail(formData.name, formData.email, formData.password);
            router.push("/");
        } catch (error: any) {
            setError(error.message || "Failed to create account");
        } finally {
            setLoading(false);
        }
    };


    return (
        <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-prime-gold/10 rounded-full blur-3xl -z-10" />

            <div className="w-full max-w-lg bg-white p-12 md:p-14 shadow-2xl rounded-lg border-t-4 border-prime-gold relative">
                {/* Close Button */}
                <button
                    onClick={() => router.push("/")}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <SectionTitle title="Join Us" centered className="mb-8" />

                {error && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-md text-center">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-prime-gold focus:border-prime-gold outline-none transition-all !bg-white !text-black placeholder:text-gray-400 focus:!bg-white focus:!text-black hover:!bg-white hover:!text-black"
                            placeholder="John Doe"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-prime-gold focus:border-prime-gold outline-none transition-all !bg-white !text-black placeholder:text-gray-400 focus:!bg-white focus:!text-black hover:!bg-white hover:!text-black"
                            placeholder="name@example.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-prime-gold focus:border-prime-gold outline-none transition-all !bg-white !text-black placeholder:text-gray-400 focus:!bg-white focus:!text-black hover:!bg-white hover:!text-black"
                            placeholder="••••••••"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-prime-gold focus:border-prime-gold outline-none transition-all !bg-white !text-black placeholder:text-gray-400 focus:!bg-white focus:!text-black hover:!bg-white hover:!text-black"
                            placeholder="••••••••"
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </div>

                    <div className="flex items-start gap-3 mt-4">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            className="mt-1 w-4 h-4 text-prime-gold border-gray-300 rounded focus:ring-prime-gold"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the <Link href="/terms" className="text-prime-gold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-prime-gold hover:underline">Privacy Policy</Link>
                        </label>
                    </div>

                    <Button
                        type="submit"
                        style={{ backgroundColor: '#D4AF37', color: '#000000' }}
                        className="w-full py-4 text-base font-semibold uppercase tracking-widest shadow-lg hover:bg-prime-accent hover:!text-black"
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                </form>

                <div className="mt-8 text-center space-y-3">
                    <p className="text-sm text-gray-500 mb-2">Or register with</p>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Chrome size={20} className="text-gray-600" />
                        <span className="text-gray-700 font-medium">Google</span>
                    </button>
                    {/* Facebook button removed */}
                </div>

                <p className="mt-8 text-center text-sm text-gray-600">
                    Already have an account? <Link href="/login" className="text-prime-gold font-medium hover:underline">Sign In</Link>
                </p>
            </div>
        </main>
    );
}
