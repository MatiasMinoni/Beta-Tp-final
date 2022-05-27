
class campeon { 
    constructor(nombre, vida, daño){
        this.nombre = nombre;
        this.vida = parseInt(vida);
        this.daño = parseInt(daño);
    }
}

const campeones= [];{
campeones.push(new campeon("ekko", 100, 10));
campeones.push(new campeon("illaoi", 100, 10));
campeones.push(new campeon("akali", 100, 10));
campeones.push(new campeon("akshan", 100, 10));
campeones.push(new campeon("alistar", 100, 10));
campeones.push(new campeon("amumu", 100, 10));
campeones.push(new campeon("anivia", 100, 10));
campeones.push(new campeon("annie", 100, 10));
campeones.push(new campeon("aphelios", 100, 10));
campeones.push(new campeon("ashe", 100, 10));
campeones.push(new campeon("asol", 100, 10));
campeones.push(new campeon("azir", 100, 10));


}




var json =[
    
        {"campeon": "illaoi",
        "id": 1,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1rLUn0HCV_5WmhFs8hOsUrUE7YsLxNZiU"
    },
    {"campeon": "ekko",
        "id": 2,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1kJFbMvu4L4Me7kyybR75ktaxZVo4tdhd"
    },
    {"campeon": "akali",
        "id": 3,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=13n9WowN65_JyHu4fjD4sBGd09JNCnk5A"
    },
    {"campeon": "akshan",
        "id": 4,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1Fs2OuIKjFHHqC6ZqEG_HuZa7OPqqekuN"
    },
    {"campeon": "alistar",
        "id": 5,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1D04W4QUFsPTiLq_sC9QaPUM40Hg0EZ16"
    },
    {"campeon": "amumu",
        "id": 6,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1aQ0Qy3g8Q2Cr5d_qoBnFWujnmX45ApBB"
    },
    {"campeon": "anivia",
        "id": 7,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1yE5_XaQOS83puTdGjIodpOzZavP-mLM1"
    },
    {"campeon": "annie",
        "id": 8,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1XaI_tk64QPZ01D-JHgCH1BFrvCdEaPVx"
    },
    {"campeon": "aphelios",
        "id": 9,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1N4jfjmarl4OsFzN8TjJfBf4VUyEkkzDH"
    },
    {"campeon": "ashe",
        "id": 10,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1Y5VhNgg4I3hh4eX4rjBpTPPaJpeFTzpo"
    },
    {"campeon": "asol",
        "id": 11,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1J-OS5uYseKztTypcr-ejGUkar9iOH7h0"
    },
    {"campeon": "azir",
        "id": 12,
    "vida": 100,
    "ataque": 10,
    "Q": 20,
    "W": 30,
    "E": 40,
    "R": 50,
    "iconURL":"http://drive.google.com/uc?export=view&id=1J-OS5uYseKztTypcr-ejGUkar9iOH7h0"
    }
    ]

function agregarElementos(){ 
    var lista=document.getElementById("ulListado"); 
    json.forEach(function(data){
    var linew= document.createElement("ul" ); 
    linew=document.createElement("li");
    var contenido = document.createTextNode(data.campeon+" "+data.vida+" "+data.ataque+" "+data.Q+" "+data.W+" "+data.E+" "+data.R );
   
var img = document.createElement("img");
var a = document.createElement("a");
a.innerHTML = "Seleccionar ";
a.setAttribute("href", "http://drive.google.com/uc?export=view&id=1J-OS5uYseKztTypcr-ejGUkar9iOH7h0");
img.src=data.iconURL;
    lista.appendChild(linew);
    linew.appendChild(img);
    linew.appendChild(a)

    linew.appendChild(contenido);
    

    })
    }
    agregarElementos();

