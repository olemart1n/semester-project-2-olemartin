export const feedLayoutNr2 = (element) => {
    return `
    <div
    class="relative aspect-square lg:aspect-square flex flex-col items-center mb-2 shrink justify-between bg-almostWhite overflow-auto hover:overflow-scrollborder-5">
    <i class="absolute fa-sharp fa-solid fa-expand top-5 right-5 text-black fa-lg" id="${element.id}"></i>
    <p class="absolute text-almostWhite p-1 bg-auctionBrown  left-0 bottom-20">${element.title}</p>
    <img 
      src="${element.media[0]}"
      alt="" class="itemImage object-top  object-cover h-2/3 shrink min-w-full img${element.id}">
    <div class="flex text-auctionBlue min-w-full justify-around counterB">
    <div class="grid grid-cols-3  m-0 p-0 w-1/2 counterBox${element.id}">
    </div>
    <a href="item?id=${element.id}" class="bg-auctionGrey p-1 mb-5 rounded-sm text-almostWhite">view item</a>
    </div>
  </div>
    `;
};

{
    /* <div class="time flex flex-col">
<h3 id="hours" class="mx-auto"></h3>
<small class="mx-auto">hours</small>
</div>
<div class="time flex flex-col">
<h3 id="minutes" class="mx-auto">00</h3>
<small class="mx-auto">minutes</small>
</div>
<div class="time flex flex-col">
<h3 id="seconds" class="mx-auto"></h3>
<small class="mx-auto">seconds</small>
</div> */
}
