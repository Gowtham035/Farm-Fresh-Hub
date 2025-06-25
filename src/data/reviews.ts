export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    rating: 5,
    date: "2023-08-15",
    text: "The produce from Farm Fresh Hub is exceptional! Everything I've ordered has been perfectly ripe and flavorful. Their tomatoes taste like summer should. The delivery is always prompt and the packaging is eco-friendly. Will continue to order weekly!"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 4,
    date: "2023-09-02",
    text: "I've been ordering their weekly vegetable box for three months now. The quality is consistently good, and I love the variety. Sometimes there are vegetables I wouldn't normally buy, which has expanded my cooking repertoire. Delivery can occasionally be delayed."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    date: "2023-07-28",
    text: "Their organic fruits are worth every penny! My family can taste the difference compared to supermarket produce. The strawberries are exceptional - so sweet and juicy. I also appreciate the transparency about how everything is grown. Great customer service too!"
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 4,
    date: "2023-08-20",
    text: "Farm Fresh Hub has been a game-changer for our family meals. The quality of their dairy products is outstanding - the fresh cheese is now a staple in our home. Only giving 4 stars because I wish they had more variety in the winter months, but that's farming!"
  },
  {
    id: 5,
    name: "Priya Patel",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5,
    date: "2023-09-10",
    text: "I've tried many farm delivery services, and Farm Fresh Hub is by far the best. Their herbs are incredibly fragrant and last much longer than store-bought. I can tell everything is harvested with care. Their customer service went above and beyond when I had an issue with my order."
  }
];