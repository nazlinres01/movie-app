import Movies from '@/components/Movies';
import React from 'react';

const Page = async ({ params }) => {
  const keyword = params.keyword;

  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8aa933f05fd3a0f4bb1c3f5f8005dffd&query=${keyword}&language=en-US&include_adult=false`);
    const data = await res.json();

    return (
      <div className="p-4">
        {data?.results && data.results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data.results.map((dt, i) => (
              <Movies key={i} dt={dt} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl">Aranılan şey bulunamadı</div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return <div className="text-center text-xl">Veri getirilirken bir hata oluştu</div>;
  }
}

export default Page;
