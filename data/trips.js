export const TRIPS = [
  {
    id: 't1',
    title: 'Menas trip',
    about:
      'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    difficulty: 'difficult',
    type: 'mountains',
    isFeatured: true,
  },
  {
    id: 't2',
    title: 'Lighttra trip',
    about:
      'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin',
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    difficulty: 'medium',
    type: 'seashore',
    image: 'images/trip-2m.jpg',
    isFeatured: true,
  },
  {
    id: 't3',
    title: 'Beach trip',
    about:
      'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    difficulty: 'easy',
    type: 'beach',
    image: 'images/trip-3m.jpg',
    isFeatured: false,
  },
];

export const getAllTrips = () => {
  return TRIPS;
};
