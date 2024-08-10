export const storySliderOption = (slidesToShow:number) => {
  return {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

export const friendSuggestionSliderOption = {
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 506,
      settings: {
        slidesToShow: 2,
      }
    },
  ],
};

export const musicSlider = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1670,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const eventSlider = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
      },
    },
  ],
};

export const eventCategory = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
      // breakpoint: 576,
      // settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      // },
      // breakpoint: 480,
      // settings: {
      // slidesToShow: 1
      // }
    },
  ],
};

export const twoSlide = {
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
      // breakpoint: 991,
      // settings: {
      // slidesToShow: 2
      // }
    },
  ],
};

export const gameSlider = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
      },
    },
  ],
};

export const friendBookTeam = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const blogSlider = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const friendSliderOption = {
  dots: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: true,
  centerMode: true,
  centerPadding: "50px",
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "20px",
        dots: false,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "30px",
        dots: false,
      },
    },
  ],
};
export const yourGamesSlider = {
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 506,
      settings: {
        slidesToShow: 2,
      }
    },
  ],
};

export const onlineStore = {
  dots: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  infinite: true,
  centerMode: true,
  centerPadding: "50px",
  responsive: [
    {
      breakpoint: 1660,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "20px",
        dots: false,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: "30px",
        dots: false,
      },
    },
  ],
};

export const sideBarGame = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  autoplay: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
      // breakpoint: 576,
      // settings: {
      // slidesToShow: 2
      // }
    },
  ],
};
