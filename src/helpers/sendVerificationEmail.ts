import { resend } from "@/lib/resent";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Next.js App | Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Successfully to send Verification Email",
    };
  } catch (emailError) {
    console.error("Error Sending Verification Email", emailError);
    return { success: false, message: "Failed to send Verification Email" };
  }
}
