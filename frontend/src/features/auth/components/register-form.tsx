"use client";

import { Button, Input } from "@headlessui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dojo: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);

		try {
			// Remove Confirm Password from credentials
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const registerCredentials = _.omit(formData, ["confirmPassword"]);
			// Register through the backend and redirect

			router.push("/dashboard");
		} catch (error) {
			setError("Please try again later");
		}
	};
	return (
		<form
			className="w-[350px] flex flex-col justify-center items-center gap-4 px-4 py-8 rounded-xl shadow bg-white"
			onSubmit={handleSubmit}
		>
			{/* First Name */}
			<div className="w-full flex flex-col gap-2">
				<label
					htmlFor="firstName"
					className="text-desc font-bold text-shade2"
				>
					First Name
				</label>
				<Input
					className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
					placeholder="John"
					name="firstName"
					required
					value={formData.firstName}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>
			{/* Last Name */}
			<div className="w-full flex flex-col gap-2">
				<label
					htmlFor="lastName"
					className="text-desc font-bold text-shade2"
				>
					Last Name
				</label>
				<Input
					className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
					placeholder="Doe"
					name="lastName"
					required
					value={formData.lastName}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>
			{/* Dojo */}
			{/* TODO: Switch to Select */}
			<div className="w-full flex flex-col gap-2">
				<label
					htmlFor="dojo"
					className="text-desc font-bold text-shade2"
				>
					Dojo
				</label>
				<Input
					className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
					placeholder="ABC Kendo Dojo"
					name="dojo"
					required
					value={formData.dojo}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>
			{/* Email */}
			<div className="w-full flex flex-col gap-2">
				<label
					htmlFor="email"
					className="text-desc font-bold text-shade2"
				>
					Email
				</label>
				<Input
					className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
					placeholder="john@email.com"
					type="email"
					name="email"
					required
					value={formData.email}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>
			{/* Password */}
			<div className="w-full flex flex-col gap-2">
				<label
					htmlFor="password"
					className="text-desc font-bold text-shade2"
				>
					Password
				</label>
				<Input
					className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
					type="password"
					placeholder="Password"
					name="password"
					required
					value={formData.password}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>
			{/* Confirm Password */}
			<div className="w-full flex flex-col gap-2">
				<label
					htmlFor="confirmPassword"
					className="text-desc font-bold text-shade2"
				>
					Confirm Password
				</label>
				<Input
					className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
					type="password"
					placeholder="Confirm Password"
					name="confirmPassword"
					required
					value={formData.confirmPassword}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>
			{error && (
				<p className="text-error text-sm">
					<strong>Error:</strong> {error}
				</p>
			)}
			{/* Sign In */}
			<Button
				type="submit"
				className="w-full py-4 bg-secondary rounded-lg text-desc text-white hover:bg-secondary/95 transition-colors"
				disabled={isLoading}
			>
				{isLoading ? "Registering..." : "Register"}
			</Button>
		</form>
	);
};

export default RegisterForm;
