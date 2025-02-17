/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('nextjs-online-store');

db.getCollection("carts").insertMany([
  { userId: '1', cartIds: ['100', '200', '300'] },
  { userId: '2', cartIds: ['400', '500', '600'] },
]);

console.log(db.getCollection("carts").find({}));

// const imgPath = "https://raw.githubusercontent.com/esthersoftwaredev/images/main/products/";

// // Insert a few documents into the sales collection.
// db.getCollection("products").insertMany([
// 	{
// 		id: "100",
// 		name: "Laptop",
// 		price: 999.99,
// 		imageUrl: `${imgPath}laptop-main.jpg`,
// 		description:
// 			"This is a laptop, a portable computer that is small enough to use in your lap. The laptop is a great tool for people who need to work on the go. It is lightweight and easy to carry around, making it perfect for students, business professionals, and anyone else who needs to work while they are away from their desk.",
// 	},
// 	{
// 		id: "200",
// 		name: "Smartphone",
// 		price: 499.99,
// 		imageUrl: `${imgPath}smartphone-main.jpg`,
// 		description:
// 			"This is a smartphone, a mobile phone that is more advanced than a regular cell phone. Smartphones offer a wide range of features, including internet access, email, social media, and more. They are a great tool for staying connected and getting things done on the go.",
// 	},
// 	{
// 		id: "300",
// 		name: "Headphones",
// 		price: 89.99,
// 		imageUrl: `${imgPath}headphones-main.jpg`,
// 		description:
// 			"These are headphones, a pair of small speakers that are worn over the ears. Headphones are a great way to listen to music, podcasts, and other audio content without disturbing others. They are a popular accessory for smartphones, laptops, and other devices.",
// 	},
// 	{
// 		id: "400",
// 		name: "Camera",
// 		price: 699.99,
// 		imageUrl: `${imgPath}camera-main.jpg`,
// 		description:
// 			"This is a camera, a device that captures images and videos. Cameras are used for a wide range of purposes, including photography, videography, surveillance, and more. They are a great tool for capturing memories and creating content.",
// 	},
// 	{
// 		id: "500",
// 		name: "Smart Watch",
// 		price: 149.99,
// 		imageUrl: `${imgPath}smart-watch-main.jpg`,
// 		description:
// 			"This is a smart watch, a wearable device that offers a wide range of features, including fitness tracking, notifications, and more. Smart watches are a great tool for staying connected and tracking your health and fitness goals.",
// 	},
// 	{
// 		id: "600",
// 		name: "Gaming Console",
// 		price: 299.99,
// 		imageUrl: `${imgPath}gaming-console-main.jpg`,
// 		description:
// 			"This is a gaming console, a device that is used to play video games. Gaming consoles offer a wide range of games and features, making them a popular choice for gamers of all ages. They are a great tool for entertainment and relaxation.",
// 	},
// 	{
// 		id: "700",
// 		name: "Coffee Maker",
// 		price: 49.99,
// 		imageUrl: `${imgPath}coffee-maker-main.jpg`,
// 		description:
// 			"This is a coffee maker, a device that is used to brew coffee. Coffee makers come in a wide range of styles and sizes, from single-serve machines to large drip brewers. They are a great tool for making delicious coffee at home.",
// 	},
// 	{
// 		id: "800",
// 		name: "Backpack",
// 		price: 39.99,
// 		imageUrl: `${imgPath}backpack-main.jpg`,
// 		description:
// 			"This is a backpack, a bag that is worn on the back and used to carry items. Backpacks are a popular choice for students, hikers, and travelers, as they are comfortable to wear and offer plenty of storage space. They are a great tool for carrying books, clothes, and other essentials.",
// 	},
// 	{
// 		id: "900",
// 		name: "Desk Lamp",
// 		price: 29.99,
// 		imageUrl: `${imgPath}desk-light-main.jpg`,
// 		description:
// 			"This is a desk lamp, a light fixture that is used to illuminate a work surface. Desk lamps come in a wide range of styles and sizes, from classic bankers lamps to modern LED lights. They are a great tool for providing task lighting and creating a comfortable work environment.",
// 	},
// 	{
// 		id: "1000",
// 		name: "Smart TV",
// 		price: 779.99,
// 		imageUrl: `${imgPath}smart-TV-main.jpg`,
// 		description:
// 			"This is a smart TV, a television set that is connected to the internet and offers a wide range of features, including streaming services, apps, and more. Smart TVs are a great tool for entertainment, as they offer access to a wide range of content and services.",
// 	},
// 	{
// 		id: "1100",
// 		name: "Wireless Mouse",
// 		price: 34.99,
// 		imageUrl: `${imgPath}wireless-mouse-main.jpg`,
// 		description:
// 			"This is a wireless mouse, a pointing device that is used to control the cursor on a computer screen. Wireless mice connect to your computer via Bluetooth or a USB receiver, allowing you to move the cursor without being tethered by a cable. They are a great tool for navigating your computer with ease.",
// 	},
// 	{
// 		id: "1200",
// 		name: "Mini PC",
// 		price: 1444.99,
// 		imageUrl: `${imgPath}mini-pc-main.jpg`,
// 		description:
// 			"This is a mini PC, a small computer that is designed to be compact and portable. Mini PCs offer a wide range of features, including internet access, video playback, and more. They are a great tool for people who need a powerful computer in a small package.",
// 	},
// ]);

// console.log(db.getCollection("products").find({}));