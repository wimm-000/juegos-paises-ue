import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, useNavigate, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect } from "react";
import Confetti from "react-confetti";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-6xl flex justify-center p-4 font-bold",
        children: "Quiz de Banderas"
      }), children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const countriesKey = "countriesKey";
const countries$1 = [
  { flag: "🇦🇹", name: "Austria", capital: "Viena" },
  { flag: "🇧🇪", name: "Bélgica", capital: "Bruselas" },
  { flag: "🇧🇬", name: "Bulgaria", capital: "Sofía" },
  { flag: "🇭🇷", name: "Croacia", capital: "Zagreb" },
  { flag: "🇨🇾", name: "Chipre", capital: "Nicosia" },
  { flag: "🇨🇿", name: "República Checa", capital: "Praga" },
  { flag: "🇩🇰", name: "Dinamarca", capital: "Copenhague" },
  { flag: "🇪🇪", name: "Estonia", capital: "Tallin" },
  { flag: "🇫🇮", name: "Finlandia", capital: "Helsinki" },
  { flag: "🇫🇷", name: "Francia", capital: "París" },
  { flag: "🇩🇪", name: "Alemania", capital: "Berlín" },
  { flag: "🇬🇷", name: "Grecia", capital: "Atenas" },
  { flag: "🇭🇺", name: "Hungría", capital: "Budapest" },
  { flag: "🇮🇪", name: "Irlanda", capital: "Dublín" },
  { flag: "🇮🇹", name: "Italia", capital: "Roma" },
  { flag: "🇱🇻", name: "Letonia", capital: "Riga" },
  { flag: "🇱🇹", name: "Lituania", capital: "Vilna" },
  { flag: "🇱🇺", name: "Luxemburgo", capital: "Luxemburgo" },
  { flag: "🇲🇹", name: "Malta", capital: "La Valeta" },
  { flag: "🇳🇱", name: "Países Bajos", capital: "Ámsterdam" },
  { flag: "🇵🇱", name: "Polonia", capital: "Varsovia" },
  { flag: "🇵🇹", name: "Portugal", capital: "Lisboa" },
  { flag: "🇷🇴", name: "Rumanía", capital: "Bucarest" },
  { flag: "🇸🇰", name: "Eslovaquia", capital: "Bratislava" },
  { flag: "🇸🇮", name: "Eslovenia", capital: "Liubliana" },
  { flag: "🇪🇸", name: "España", capital: "Madrid" },
  { flag: "🇸🇪", name: "Suecia", capital: "Estocolmo" }
];
const sortedCountries = (c) => c.sort((a, b) => a.name.localeCompare(b.name));
const sortedCapitals = (c) => c.sort((a, b) => a.capital.localeCompare(b.capital));
const home = withComponentProps(function Index() {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [randomItems, setRandomItems] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedCountries(() => {
      const storedCountries = localStorage.getItem(countriesKey);
      const decodeCountries = JSON.parse(storedCountries || "[]");
      return decodeCountries;
    });
  }, []);
  const handleCheckboxChange = (country) => {
    const currentlySelected = selectedCountries.find((c) => c.name === country.name) ? [...selectedCountries].filter((c) => c.name !== country.name) : [...selectedCountries, country];
    setSelectedCountries(currentlySelected);
    const currentSelectedCountries = JSON.stringify([...currentlySelected]);
    localStorage.setItem(countriesKey, currentSelectedCountries);
  };
  const onSelectAll = () => {
    setSelectedCountries(countries$1);
    localStorage.setItem(countriesKey, JSON.stringify(countries$1));
  };
  const onClear = () => {
    setSelectedCountries([]);
    localStorage.removeItem(countriesKey);
  };
  const onRandomItems = (e) => {
    setRandomItems(Number(e.target.value));
  };
  const getRandomCountries = (num) => {
    const shuffled = countries$1.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const onSelectRandom = () => {
    const randomSelectedCountries = getRandomCountries(randomItems);
    localStorage.setItem(countriesKey, JSON.stringify(randomSelectedCountries));
    navigate("/game");
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center  h-screen",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-2xl font-bold mb-4",
      children: "Selecciona las banderas"
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex gap-2 pb-8",
      children: [/* @__PURE__ */ jsx("button", {
        onClick: onSelectAll,
        className: "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700",
        children: "Seleccionar todo"
      }), /* @__PURE__ */ jsx("button", {
        onClick: onClear,
        className: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700",
        children: "Borrar todo"
      }), /* @__PURE__ */ jsx("button", {
        onClick: onSelectRandom,
        className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700",
        children: "Aleatrio"
      }), /* @__PURE__ */ jsx("input", {
        className: "border-gray-300 border-dashed p-2",
        type: "number",
        value: randomItems,
        onChange: onRandomItems
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4",
      children: sortedCountries(countries$1).map((country) => /* @__PURE__ */ jsxs("label", {
        className: "flex items-center justify-center p-2 cursor-pointer",
        children: [/* @__PURE__ */ jsx("input", {
          type: "checkbox",
          value: country.name,
          checked: !!selectedCountries.find((c) => c.name === country.name),
          onChange: () => handleCheckboxChange(country),
          className: "hidden"
        }), /* @__PURE__ */ jsxs("div", {
          className: `w-32 h-25 rounded-2xl center overflow-hidden flex justify-center flex-col items-center bg-cover bg-center border-2 ${!!selectedCountries.find((c) => c.name === country.name) ? "border-blue-500 bg-blue-100" : "border-gray-300"}`,
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-6xl",
            children: country.flag
          }), /* @__PURE__ */ jsx("div", {
            className: "text-l font-bold",
            children: country.name
          })]
        })]
      }, country.name))
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex gap-2 py-8",
      children: [/* @__PURE__ */ jsx(Link, {
        to: "/game",
        children: /* @__PURE__ */ jsx("button", {
          className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700",
          children: "Empezar"
        })
      }), /* @__PURE__ */ jsx(Link, {
        to: "/review",
        children: /* @__PURE__ */ jsx("button", {
          className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700",
          children: "Repasar"
        })
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
function CountryList({ countries: countries2 }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: countries2.map((country) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "border rounded-lg p-4 flex flex-col items-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: country.flag }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: country.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: country.capital })
      ]
    },
    country.name
  )) });
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const game = withComponentProps(function Game() {
  const checkShuffledCountries = () => {
    const storedCountries = localStorage.getItem(countriesKey);
    const decodeCountries = JSON.parse(storedCountries || "[]");
    if (decodeCountries.length === 0) {
      return shuffleArray([...countries$1]);
    }
    return shuffleArray([...decodeCountries]);
  };
  const [shuffledCountries, setShuffledCountries] = useState(checkShuffledCountries);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCapital, setSelectedCapital] = useState("");
  const [incorectAnswers, setIncorrectAnswers] = useState([]);
  useEffect(() => {
    setShuffledCountries(checkShuffledCountries);
  }, []);
  const handleNext = () => {
    if (selectedCountry === shuffledCountries[currentIndex].name && selectedCapital === shuffledCountries[currentIndex].capital) {
      setScore({
        ...score,
        correct: score.correct + 1
      });
    } else {
      setScore({
        ...score,
        incorrect: score.incorrect + 1
      });
      setIncorrectAnswers([...incorectAnswers, shuffledCountries[currentIndex]]);
    }
    setCurrentIndex(currentIndex + 1);
    setSelectedCountry("");
    setSelectedCapital("");
  };
  const handleRestart = () => {
    setShuffledCountries(checkShuffledCountries);
    setCurrentIndex(0);
    setScore({
      correct: 0,
      incorrect: 0
    });
  };
  if (currentIndex >= shuffledCountries.length) {
    return /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col items-center center min-h-screen",
      children: [score.incorrect === 0 && /* @__PURE__ */ jsx(Confetti, {
        width: window.innerWidth,
        height: window.innerHeight
      }), /* @__PURE__ */ jsx("h1", {
        className: "text-4xl font-bold mb-4",
        children: "Quiz terminado"
      }), /* @__PURE__ */ jsxs("div", {
        className: "text-center mb-4",
        children: [/* @__PURE__ */ jsxs("p", {
          className: "text-xl text-green-600",
          children: ["✔︎ Aciertos: ", /* @__PURE__ */ jsx("span", {
            className: "font-bold",
            children: score.correct
          })]
        }), /* @__PURE__ */ jsxs("p", {
          className: "text-xl text-red-400",
          children: ["❌ Errores: ", /* @__PURE__ */ jsx("span", {
            className: "font-bold",
            children: score.incorrect
          })]
        })]
      }), /* @__PURE__ */ jsx("h2", {
        children: "Listado de errores"
      }), /* @__PURE__ */ jsx(CountryList, {
        countries: incorectAnswers
      }), /* @__PURE__ */ jsx(Link, {
        to: "/",
        onClick: handleRestart,
        className: "m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700",
        children: "Reiniciar"
      })]
    });
  }
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex justify-center items-center flex-col gap-2 text-9xl m-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-4xl font-bold",
        children: [currentIndex, " de ", shuffledCountries.length]
      }), /* @__PURE__ */ jsx("span", {
        children: shuffledCountries[currentIndex].flag
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex justify-center gap-3 mb-6",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("label", {
          children: /* @__PURE__ */ jsxs("select", {
            value: selectedCountry,
            onChange: (e) => setSelectedCountry(e.target.value),
            className: "block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300",
            children: [/* @__PURE__ */ jsx("option", {
              value: "",
              children: "Que pais es"
            }), sortedCountries(shuffledCountries).map((country) => /* @__PURE__ */ jsx("option", {
              value: country.name,
              children: country.name
            }, country.name))]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("label", {
          children: /* @__PURE__ */ jsxs("select", {
            value: selectedCapital,
            onChange: (e) => setSelectedCapital(e.target.value),
            className: "block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300",
            children: [/* @__PURE__ */ jsx("option", {
              value: "",
              children: "Cual es su capital"
            }), sortedCapitals(shuffledCountries).map((country) => /* @__PURE__ */ jsx("option", {
              value: country.capital,
              children: country.capital
            }, country.capital))]
          })
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex justify-center gap-9",
      children: [/* @__PURE__ */ jsx(Link, {
        to: "/",
        className: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700",
        children: "Reiniciar"
      }), /* @__PURE__ */ jsx("button", {
        onClick: handleNext,
        className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700",
        children: "Siguiente"
      })]
    }), incorectAnswers.length > 0 && /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col items-center center min-h-screen",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "py-4",
        children: "Listado de errores"
      }), /* @__PURE__ */ jsx(CountryList, {
        countries: incorectAnswers.reverse()
      })]
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: game
}, Symbol.toStringTag, { value: "Module" }));
const countries = withComponentProps(function Flags() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center justify-center min-h-screen",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-4xl font-bold mb-8",
      children: "Listado de Banderas"
    }), /* @__PURE__ */ jsx(CountryList, {
      countries: sortedCountries(countries$1)
    }), /* @__PURE__ */ jsx(Link, {
      to: "/",
      className: "mb-8 mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700",
      children: "Volver al inicio"
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: countries
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-i8OPSHZw.js", "imports": ["/assets/chunk-IR6S3I6Y-CP22hbnm.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-OkVNRhGW.js", "imports": ["/assets/chunk-IR6S3I6Y-CP22hbnm.js", "/assets/with-props-BhmrRePD.js"], "css": ["/assets/root-KmWV34gC.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-ZbQWUhQG.js", "imports": ["/assets/with-props-BhmrRePD.js", "/assets/chunk-IR6S3I6Y-CP22hbnm.js", "/assets/storageKeys-BkemLPfi.js", "/assets/sort-blGglnh_.js"], "css": [] }, "routes/game": { "id": "routes/game", "parentId": "root", "path": "/game/", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/game-WpdzOjWG.js", "imports": ["/assets/with-props-BhmrRePD.js", "/assets/chunk-IR6S3I6Y-CP22hbnm.js", "/assets/countryList-QbIQANgF.js", "/assets/storageKeys-BkemLPfi.js", "/assets/sort-blGglnh_.js"], "css": [] }, "routes/countries": { "id": "routes/countries", "parentId": "root", "path": "/review", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/countries-DG-I2yxq.js", "imports": ["/assets/with-props-BhmrRePD.js", "/assets/chunk-IR6S3I6Y-CP22hbnm.js", "/assets/countryList-QbIQANgF.js", "/assets/sort-blGglnh_.js"], "css": [] } }, "url": "/assets/manifest-3f9e4a43.js", "version": "3f9e4a43" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/game": {
    id: "routes/game",
    parentId: "root",
    path: "/game/",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/countries": {
    id: "routes/countries",
    parentId: "root",
    path: "/review",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
