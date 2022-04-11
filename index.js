const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph");
    cats;
    }

function destructivelyPrependCat() {
        cats.unshift("Bob");
        cats;
    }

function destructivelyRemoveLastCat() {
    cats.pop();
    cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    cats;
}

function appendCat(name) {
    let appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat(name) {
    let prependCat = ["Arnold", ...cats];
    return prependCat;
}

function removeLastCat() {
    let removeLastCat = cats.slice(0,2);
    return removeLastCat;
  }

  function removeFirstCat () {
    let removeFirstCat = cats.slice(1,3);
    return removeFirstCat;
  }
