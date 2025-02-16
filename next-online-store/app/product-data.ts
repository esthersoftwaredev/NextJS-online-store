export interface Product {
  id: string;
  imageUrl: string;
  additionalImages?: string[];
  name: string;
  description: string;
  price: number;
}

const imgPath = "https://raw.githubusercontent.com/esthersoftwaredev/images/main/products/";


export const products: Product[] = [
	{
		id: "123",
		name: "Laptop",
		price: 999.99,
		imageUrl: `${imgPath}laptop-main.jpg`,
		additionalImages: [
			`${imgPath}laptop-image1.jpg`,
			`${imgPath}laptop-image2.jpg`,
			`${imgPath}laptop-image3.jpg`,
		],
    description: "This is a laptop, a portable computer that is small enough to use in your lap. The laptop is a great tool for people who need to work on the go. It is lightweight and easy to carry around, making it perfect for students, business professionals, and anyone else who needs to work while they are away from their desk.",
	},
	{
		id: "345",
		name: "Smartphone",
		price: 499.99,
		imageUrl: `${imgPath}smartphone-main.jpg`,
		additionalImages: [
			`${imgPath}smartphone-image1.jpg`,
			`${imgPath}smartphone-image2.jpg`,
			`${imgPath}smartphone-image3.jpg`,
		],
    description: "This is a smartphone, a mobile phone that is more advanced than a regular cell phone. Smartphones offer a wide range of features, including internet access, email, social media, and more. They are a great tool for staying connected and getting things done on the go.",
	},
	{
		id: "567",
		name: "Headphones",
		price: 89.99,
		imageUrl: `${imgPath}headphones-main.jpg`,
		additionalImages: [
			`${imgPath}headphones-image1.jpg`,
			`${imgPath}headphones-image2.jpg`,
			`${imgPath}headphones-image3.jpg`,
		],
    description: "These are headphones, a pair of small speakers that are worn over the ears. Headphones are a great way to listen to music, podcasts, and other audio content without disturbing others. They are a popular accessory for smartphones, laptops, and other devices.",
	},
	{
		id: "789",
		name: "Camera",
		price: 699.99,
		imageUrl: `${imgPath}camera-main.jpg`,
		additionalImages: [
			`${imgPath}camera-image1.jpg`,
			`${imgPath}camera-image2.jpg`,
			`${imgPath}camera-image3.jpg`,
		],
    description: "This is a camera, a device that captures images and videos. Cameras are used for a wide range of purposes, including photography, videography, surveillance, and more. They are a great tool for capturing memories and creating content.",
	},
	{
		id: "101",
		name: "Smart Watch",
		price: 149.99,
		imageUrl: `${imgPath}smart-watch-main.jpg`,
		additionalImages: [
			`${imgPath}smart-watch-image1.jpg`,
			`${imgPath}smart-watch-image2.jpg`,
			`${imgPath}smart-watch-image3.jpg.jpg`,
		],
    description: "This is a smart watch, a wearable device that offers a wide range of features, including fitness tracking, notifications, and more. Smart watches are a great tool for staying connected and tracking your health and fitness goals.",
	},
	{
		id: "121",
		name: "Gaming Console",
		price: 299.99,
		imageUrl: `${imgPath}gaming-console-main.jpg`,
		additionalImages: [
			`${imgPath}gaming-console-image1.png`,
			`${imgPath}gaming-console-image2.png`,
			`${imgPath}gaming-console-image3.png`,
		],
    description: "This is a gaming console, a device that is used to play video games. Gaming consoles offer a wide range of games and features, making them a popular choice for gamers of all ages. They are a great tool for entertainment and relaxation.",
	},
	{
		id: "141",
		name: "Coffee Maker",
		price: 49.99,
		imageUrl: `${imgPath}coffee-maker-main.jpg`,
		additionalImages: [
			`${imgPath}coffee-maker-image1.jpg`,
			`${imgPath}coffee-maker-image2.jpg`,
			`${imgPath}coffee-maker-image3.jpg`,
		],
    description: "This is a coffee maker, a device that is used to brew coffee. Coffee makers come in a wide range of styles and sizes, from single-serve machines to large drip brewers. They are a great tool for making delicious coffee at home.",
	},
	{
		id: "161",
		name: "Backpack",
		price: 39.99,
		imageUrl: `${imgPath}backpack-main.jpg`,
		additionalImages: [
			`${imgPath}backpack-image1.jpg`,
			`${imgPath}backpack-image2.jpg`,
			`${imgPath}backpack-image3.jpg`,
		],
    description: "This is a backpack, a bag that is worn on the back and used to carry items. Backpacks are a popular choice for students, hikers, and travelers, as they are comfortable to wear and offer plenty of storage space. They are a great tool for carrying books, clothes, and other essentials.",
	},
	{
		id: "181",
		name: "Desk Lamp",
		price: 29.99,
		imageUrl: `${imgPath}desk-light-main.jpg`,
		additionalImages: [
			`${imgPath}desk-light-image1.jpg`,
			`${imgPath}desk-light-image2.jpg`,
			`${imgPath}desk-light-image3.jpg`,
		],
    description: "This is a desk lamp, a light fixture that is used to illuminate a work surface. Desk lamps come in a wide range of styles and sizes, from classic bankers lamps to modern LED lights. They are a great tool for providing task lighting and creating a comfortable work environment.",
	},
	{
		id: "201",
		name: "Smart TV",
		price: 79.99,
		imageUrl: `${imgPath}smart-TV-main.jpg`,
		additionalImages: [
			`${imgPath}smart-TV-image1.jpg`,
			`${imgPath}smart-TV-image2.jpg`,
			`${imgPath}smart-TV-image3.jpg`,
		],
    description: "This is a smart TV, a television set that is connected to the internet and offers a wide range of features, including streaming services, apps, and more. Smart TVs are a great tool for entertainment, as they offer access to a wide range of content and services.",
	},
	{
		id: "221",
		name: "External Hard Drive",
		price: 129.99,
		imageUrl: `${imgPath}external-ssd-main.jpg`,
		additionalImages: [
			`${imgPath}external-ssd-image1.jpg`,
			`${imgPath}external-ssd-image2.jpg`,
			`${imgPath}external-ssd-image3.jpg`,
		],
    description: "This is an external hard drive, a storage device that is used to store and back up data. External hard drives come in a wide range of capacities and sizes, from small portable drives to large desktop models. They are a great tool for keeping your files safe and secure.",
	},
	{
		id: "241",
		name: "Bluetooth Speaker",
		price: 59.99,
		imageUrl: `${imgPath}bluetooth-speaker-main.jpg`,
		additionalImages: [
			`${imgPath}bluetooth-speaker-image1.jpg`,
			`${imgPath}bluetooth-speaker-image2.jpg`,
			`${imgPath}bluetooth-speaker-image3.jpg`,
		],
    description: "This is a Bluetooth speaker, a wireless speaker that connects to your devices via Bluetooth. Bluetooth speakers are a popular choice for listening to music, podcasts, and other audio content on the go. They are a great tool for enjoying high-quality sound wherever you are.",
	},
	{
		id: "261",
		name: "Sunglasses",
		price: 19.99,
		imageUrl: `${imgPath}sunglasses-main.jpg`,
		additionalImages: [
			`${imgPath}sunglasses-image1.jpg`,
			`${imgPath}sunglasses-image2.jpg`,
			`${imgPath}sunglasses-image3.jpg`,
		],
    description: "These are sunglasses, a pair of glasses that are worn to protect the eyes from the sun. Sunglasses come in a wide range of styles and colors, from classic aviators to modern wayfarers. They are a great tool for staying comfortable and stylish in the sun.",
	},
	{
		id: "281",
		name: "Printed T-Shirt",
		price: 24.99,
		imageUrl: `${imgPath}angular-tshirt-main.jpg`,
		additionalImages: [
			`${imgPath}angular-tshirt-image1.jpg`,
			`${imgPath}angular-tshirt-image2.jpg`,
			`${imgPath}angular-tshirt-image3.jpg`,
		],
    description: "This is a printed t-shirt, a garment that is worn on the upper body. T-shirts come in a wide range of styles and designs, from classic crewnecks to modern V-necks. They are a popular choice for casual wear, as they are comfortable and versatile.",
	},
	{
		id: "301",
		name: "Office Chair",
		price: 129.99,
		imageUrl: `${imgPath}office-chair-main.jpg`,
		additionalImages: [
			`${imgPath}office-chair-image1.jpg`,
			`${imgPath}office-chair-image2.jpg`,
			`${imgPath}office-chair-image3.jpg`,
		],
    description: "This is an office chair, a chair that is designed for use at a desk or table. Office chairs come in a wide range of styles and sizes, from classic task chairs to modern ergonomic models. They are a great tool for providing comfort and support while you work.",
  },
	{
		id: "495",
		name: "Wireless Mouse",
		price: 34.99,
		imageUrl: `${imgPath}wireless-mouse-main.jpg`,
		additionalImages: [
			`${imgPath}wireless-mouse-image1.jpg`,
			`${imgPath}wireless-mouse-image2.jpg`,
			`${imgPath}wireless-mouse-image3.jpg`,
		],
    description: "This is a wireless mouse, a pointing device that is used to control the cursor on a computer screen. Wireless mice connect to your computer via Bluetooth or a USB receiver, allowing you to move the cursor without being tethered by a cable. They are a great tool for navigating your computer with ease.",
	},
	{
		id: "515",
		name: "Mini PC",
		price: 1444.99,
		imageUrl: `${imgPath}mini-pc-main.jpg`,
		additionalImages: [
			`${imgPath}mini-pc-image1.jpg`,
			`${imgPath}mini-pc-image2.jpg`,
			`${imgPath}mini-pc-image3.jpg`,
		],
    description: "This is a mini PC, a small computer that is designed to be compact and portable. Mini PCs offer a wide range of features, including internet access, video playback, and more. They are a great tool for people who need a powerful computer in a small package.",
	},
	{
		id: "535",
		name: "Tablet",
		price: 119.99,
		imageUrl: `${imgPath}tablet-main.jpg`,
		additionalImages: [
			`${imgPath}tablet-image1.jpg`,
			`${imgPath}tablet-image2.jpg`,
			`${imgPath}tablet-image3.jpg`,
		],
    description: "This is a tablet, a portable computer that is larger than a smartphone but smaller than a laptop. Tablets offer a wide range of features, including internet access, apps, and more. They are a great tool for reading, watching videos, and playing games on the go.",
	},
	{
		id: "7621",
		name: "Portable Photo Printer",
		price: 29.99,
		imageUrl: `${imgPath}photo-printer-main.jpg`,
		additionalImages: [
			`${imgPath}photo-printer-image1.jpg`,
			`${imgPath}photo-printer-image2.jpg`,
			`${imgPath}photo-printer-image3.jpg`,
		],
    description: "This is a portable photo printer, a device that is used to print photos from your smartphone or camera. Portable photo printers are a great tool for creating physical copies of your favorite memories, whether you are at home or on the go.",
	},
	{
		id: "225",
		name: "Coffee Warmer",
		price: 19.99,
		imageUrl: `${imgPath}coffee-warmer-main.jpg`,
		additionalImages: [
			`${imgPath}coffee-warmer-image1.jpg`,
			`${imgPath}coffee-warmer-image2.jpg`,
			`${imgPath}coffee-warmer-image3.jpg`,
		],
    description: "This is a coffee warmer, a device that is used to keep your coffee warm. Coffee warmers come in a wide range of styles and sizes, from small plate warmers to large carafe warmers. They are a great tool for enjoying your coffee at the perfect temperature.",
	},
];;