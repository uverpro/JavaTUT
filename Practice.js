let obj = {Name: "Leon",
        Age: 6,
        FavDino: "T-Rex",
        DinoTraits:
            { Teeth: "Sharp",
            Size: "XXX-LARGE",
            Arms: "Tiny" } }

let {Name, DinoTraits: { Teeth } } = obj
console.log(Teeth);
