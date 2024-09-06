import React from 'react';
import Image from 'next/image';

const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8aa933f05fd3a0f4bb1c3f5f8005dffd`);
  if (!res.ok) {
    throw new Error('Ağ yanıtı uygun değil');
  }
  return await res.json();
};

const Page = async ({ params }) => {
  const { id } = params;
  const movieDetail = await getMovie(id);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt={movieDetail.title || 'Film Görseli'}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-8 left-8 text-white drop-shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">{movieDetail.title || 'Film Başlığı'}</h2>
          <p className="text-lg md:text-xl">{movieDetail.release_date || 'Yayın Tarihi'}</p>
        </div>
      </div>
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg mx-4 md:mx-8 mt-6 space-y-6">
        <h3 className="text-3xl font-semibold border-b-2 border-gray-600 pb-2">Özet</h3>
        <p className="text-lg leading-relaxed">{movieDetail.overview || 'Özet mevcut değil.'}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 border-b-2 border-gray-600 pb-2">Türler</h3>
            <ul className="list-disc pl-5 space-y-1">
              {movieDetail.genres && movieDetail.genres.map((genre) => (
                <li key={genre.id} className="text-lg">{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 border-b-2 border-gray-600 pb-2">Süre</h3>
            <p className="text-lg">{movieDetail.runtime ? `${movieDetail.runtime} dakika` : 'Süre mevcut değil'}</p>
            <h3 className="text-2xl font-semibold mt-4 mb-2 border-b-2 border-gray-600 pb-2">Puan</h3>
            <p className="text-lg">{movieDetail.vote_average ? `${movieDetail.vote_average} / 10` : 'Puan mevcut değil'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
