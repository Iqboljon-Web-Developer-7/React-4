import React, { useState } from "react";

import bookImg from "../../assets/images/dummy.jpg";

let idCounter = 0;
const BooksContainer = ({ data }) => {
  return (
    <section className="mt-10 text-slate-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
      {data.length == 0 ? (
        <h2 className="text-center col-span-4">There is no books :)</h2>
      ) : (
        data?.map((item) => {
          return (
            <div
              className="p-2 bg-slate-600 text-sm md:text-xl"
              key={idCounter++}
            >
              <img
                src={item.url.length < 10 ? bookImg : item}
                alt="If your are seeing this text this means there is no img:)"
                className="max-h-72"
              />
              <p className="title mt-4 leading-6 text-slate-100 line-clamp-1">
                <span className="text-sky-500">Title:&nbsp;</span> {item.title}
              </p>
              <p className="mt-2">
                <span className="text-sky-500">Price:&nbsp;</span> {item.price}$
              </p>
              <p className="mt-2 h-auto">
                <span className="description text-lime-400">
                  Description:&nbsp;
                </span>
                <span className="break-words line-clamp-3">
                  {item.description}
                </span>
              </p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default BooksContainer;
