import React from 'react';
import Posts from './Posts/Posts';

export default function Timeline() {
  const photos = [
    {
      id: 1,
      src: 'images/users/raphael/3.jpg',
      alt: 'Image 1',
      style: { width: '100%', height: 'auto' },
      caption:'Saint George and the Dragon'
      
    },
    {
      id: 2,
      src: 'images/users/raphael/2.jpg',
      alt: 'Image 2',
      style: { width: '100%', height: 'auto' },
      caption:'Caption for Image 2'
    },
    {
      id: 3,
      src: 'images/users/raphael/1.jpg',
      alt: 'Image 3',
      style: { width: '100%', height: 'auto' },
      caption:'Caption for Image 3'
    },
    {
      id: 4,
      src: 'images/users/raphael/4.jpg',
      alt: 'Image 4',
      style: { width: '100%', height: 'auto' },
      caption:'Caption for Image 4'
    },
    {
      id: 5,
      src: 'images/users/raphael/5.jpg',
      alt: 'Image 5',
      style: { width: '100%', height: 'auto' },
      caption:'Caption for Image 5'
    }
  ];

  const commentsByPhotoId = [
    {
      photoId: 1,
      comments: [
        { username: 'Dali', comment: 'Love this place, looks like my animal farm!' },
        { username: 'Orwell', comment: 'Would you mind if I used this picture?' },
        { username: 'Karl', comment: 'Remember to subscribe!' },
      ],
    },
    {
      photoId: 2,
      comments: [
        { username: 'Waleed', comment: 'Love this place' },
        { username: 'Ahmad', comment: 'wowww' },
        { username: 'Sami', comment: 'very beautiful' },
      ],
    },
    {
      photoId: 3,
      comments: [
        { username: 'Rami', comment: 'Love this place' },
        { username: 'Sara', comment: 'wowww' },
        { username: 'Mohammad', comment: 'very beautiful' },
      ],
    },
    {
      photoId: 4,
      comments: [
        { username: 'Haitham', comment: 'Love this place' },
        { username: 'Ahmad', comment: 'wowww' },
        { username: 'Nour', comment: 'very beautiful' },
      ],
    },
    {
      photoId: 5,
      comments: [
        { username: 'Momen', comment: 'Love this place' },
        { username: 'Sawsan', comment: 'wowww' },
        { username: 'Sally', comment: 'very beautiful' },
      ],
    },
   
  ];

  const posts = photos.map(photo => {
    const commentObj = commentsByPhotoId.find(obj => obj.photoId === photo.id);
    const comments = commentObj?.comments || [];

    return {
      id: photo.id,
      username: 'Raphael',
      imageSrc: photo.src,
      alt: photo.alt,
      docId: `exampleDocId-${photo.id}`,
      likes: [],
      userLikedPhoto: false,
      caption: photo.caption,
      comments: comments.map(comment => ({ username: comment.username, comment: comment.comment })),
      dateCreated: Date.now()
    };
  });

  return (
    <div className="container col-span-2">
      {posts.map((post) => (
        <div key={post.id} className="mb-12">
          <Posts content={post} />
        </div>
      ))}
    </div>
  );
}