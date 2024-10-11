"use client";

import { Button, Input } from "@headlessui/react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
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
			// Login through the backend and redirect
			const requestBody = JSON.stringify(formData)
			console.log(requestBody)
			const response = await fetch('http://localhost:5000/api/v1/login', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: requestBody
			})
			console.log(response)
			router.push("/dashboard");
		} catch (error) {
			setError("Please try again later")
		}

		setIsLoading(false)
	};

	return (
		<form
			className="w-[350px] flex flex-col justify-center items-center gap-4 px-4 py-8 rounded-xl shadow bg-white"
			onSubmit={handleSubmit}
		>
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
					name="email"
					type="email"
					required
					value={formData.email}
					onChange={handleChange}
					disabled={isLoading}
				/>
			</div>
			{/* Password */}
			<div className="w-full flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<label
						htmlFor="password"
						className="text-desc font-bold text-shade2"
					>
						Password
					</label>
					<Link
						href={"/reset"}
						className="text-secondary hover:underline text-desc"
					>
						Forget Password?
					</Link>
				</div>
				<Input
					className="w-full flex flex-col gap-1 px-3 py-4 border border-text rounded-lg text-button-sm"
					type="password"
					name="password"
					placeholder="Password"
					required
					value={formData.password}
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
				{isLoading ? "Signing in..." : "Sign In"}
			</Button>
		</form>
	);
};

export default LoginForm;
