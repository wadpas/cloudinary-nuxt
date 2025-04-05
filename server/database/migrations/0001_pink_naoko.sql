CREATE TABLE `profiles` (
	`id` integer PRIMARY KEY NOT NULL,
	`bio` text,
	`user_id` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
