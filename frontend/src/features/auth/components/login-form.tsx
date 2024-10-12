"use client";

// TODO: UNFINISHED LOGIN FORM, NEEDS TO BE REDONE WITH CLERK ELEMENTS

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Oval } from "react-loader-spinner";

const LoginForm = () => {
  return (
    <div className="font-poppins w-[400px] rounded-xl bg-white p-6 shadow">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) =>
            isGlobalLoading ? (
              <div className="flex w-full items-center justify-center p-6">
                <Oval color="#2F1893" secondaryColor="#EAE8F4" />
              </div>
            ) : (
              <>
                <SignIn.Step
                  name="start"
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <Clerk.Field
                    name="identifier"
                    className="flex w-full flex-col gap-2"
                  >
                    <Clerk.Label className="text-desc text-shade2 font-bold">
                      Email
                    </Clerk.Label>
                    <Clerk.Input
                      className="border-text text-button-sm hover:bg-grey focus:bg-grey flex w-full flex-col gap-1 rounded-lg border px-3 py-4 transition-colors"
                      placeholder="john@email.com"
                      disabled={isGlobalLoading}
                    />
                    <Clerk.FieldError className="text-error" />
                  </Clerk.Field>

                  <SignIn.Action
                    submit
                    className="bg-secondary text-desc hover:bg-secondary/95 w-full rounded-lg py-4 text-white transition-colors"
                    disabled={isGlobalLoading}
                  >
                    <Clerk.Loading>
                      {(isLoading) =>
                        isLoading ? "Loading..." : "Sign in with email"
                      }
                    </Clerk.Loading>
                  </SignIn.Action>

                  <p className="text-desc before:bg-grey/80 after:bg-grey/80 flex w-full items-center gap-x-3 font-medium before:h-px before:flex-1 after:h-px after:flex-1">
                    or
                  </p>

                  <Clerk.Connection
                    name="google"
                    className="border-text text-desc hover:bg-grey flex w-full items-center justify-center gap-2 rounded-lg border py-[14px] font-medium transition-colors"
                    disabled={isGlobalLoading}
                  >
                    <Clerk.Icon />
                    <Clerk.Loading scope="provider:google">
                      {(isLoading) =>
                        isLoading ? "Loading..." : "Continue with Google"
                      }
                    </Clerk.Loading>
                  </Clerk.Connection>
                </SignIn.Step>

                <SignIn.Step name="verifications">
                  <SignIn.Strategy name="email_code">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-1.5 pb-8">
                        <h1 className="text-2xl font-semibold">
                          Please check your email
                        </h1>
                        <span className="font-base text-sm">
                          We sent a code to{" "}
                          <span className="font-semibold">
                            <SignIn.SafeIdentifier />
                          </span>
                          .
                        </span>
                      </div>

                      <Clerk.Field
                        name="code"
                        className="flex w-full flex-col gap-4"
                      >
                        <Clerk.Input
                          type="otp"
                          autoSubmit
                          className="flex justify-center py-0 has-[:disabled]:opacity-50"
                          render={({ value, status }) => (
                            <div
                              data-status={status}
                              className={`relative flex size-10 items-center justify-center border-y border-r border-black text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md ${(status === "cursor" || status === "selected") && "z-10 ring-2 ring-black ring-offset-0"}`}
                            >
                              {value}
                              {status === "cursor" && (
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                  <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
                                </div>
                              )}
                            </div>
                          )}
                        />
                        <Clerk.FieldError className="text-error" />
                        <SignIn.Action
                          submit
                          className="bg-secondary text-desc hover:bg-secondary/95 w-full rounded-lg py-4 text-white transition-colors"
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading>
                            {(isLoading) =>
                              isLoading ? "Loading..." : "Verify"
                            }
                          </Clerk.Loading>
                        </SignIn.Action>
                        <SignIn.Action
                          asChild
                          resend
                          className="text-paragraph py-2"
                          fallback={({ resendableAfter }) => (
                            <button
                              disabled
                              className="text-paragraph text-center font-medium"
                            >
                              Resent the code to your email! ({resendableAfter})
                            </button>
                          )}
                        >
                          <span className="text-paragraph text-center font-medium hover:cursor-pointer hover:underline">
                            Didn&apos;t receive a code? Resend
                          </span>
                        </SignIn.Action>
                      </Clerk.Field>
                    </div>
                  </SignIn.Strategy>
                </SignIn.Step>
              </>
            )
          }
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
};

export default LoginForm;
