CREATE TABLE `books` (
	`slug` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`year` integer NOT NULL,
	`pages` integer NOT NULL,
	`price` integer NOT NULL,
	`creator` text DEFAULT 'admin-admin-com',
	`created_at` integer DEFAULT '"2025-04-06T16:31:25.706Z"'
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
	`created_at` integer DEFAULT '"2025-04-06T16:31:25.707Z"'
);
