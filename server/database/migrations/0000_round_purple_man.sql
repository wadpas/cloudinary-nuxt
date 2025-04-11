CREATE TABLE `books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`year` integer NOT NULL,
	`pages` integer NOT NULL,
	`price` integer NOT NULL,
	`creator` text DEFAULT 'admin-admin-com',
	`created_at` integer DEFAULT '"2025-04-11T08:32:28.029Z"'
);
--> statement-breakpoint
CREATE TABLE `books_to_genres` (
	`book` integer NOT NULL,
	`genre_slug` integer NOT NULL,
	PRIMARY KEY(`book`, `genre_slug`)
);
--> statement-breakpoint
CREATE TABLE `genres` (
	`slug` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`creator` text DEFAULT 'admin-admin-com',
	`created_at` integer DEFAULT '"2025-04-11T08:32:28.029Z"'
);
--> statement-breakpoint
CREATE TABLE `oauth_accounts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`provider_id` text NOT NULL,
	`provider_user_id` text NOT NULL,
	`created_at` integer DEFAULT '"2025-04-11T08:32:28.028Z"',
	`updated_at` integer DEFAULT '"2025-04-11T08:32:28.028Z"'
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`username` text NOT NULL,
	`password` text,
	`name` text,
	`avatar` text,
	`role` text DEFAULT 'user',
	`created_at` integer DEFAULT '"2025-04-11T08:32:28.027Z"',
	`updated_at` integer DEFAULT '"2025-04-11T08:32:28.027Z"'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);