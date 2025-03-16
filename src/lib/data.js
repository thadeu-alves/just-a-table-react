export const data = {
    get(){
      return DB;
    },
    post(object){
      DB.push({id: crypto.randomUUID(), ...object});
      console.log(DB.length);
    },
    delete(id){
      DB.splice(id, 1);
    }
}

const DB = [
    {
      "id": 1,
      "profile": {
        "name": "Thadeu",
        "email": "thadeu@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "development",
      "tags": ["tech", "leader", "sentimental"],
      "workPercentual": 90
    },
    {
      "id": 2,
      "profile": {
        "name": "Carlos",
        "email": "carlos@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "design",
      "tags": ["creative", "visual", "innovative"],
      "workPercentual": 75
    },
    {
      "id": 3,
      "profile": {
        "name": "Ana",
        "email": "ana@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "engineering",
      "tags": ["logical", "problem-solver", "analytical"],
      "workPercentual": 85
    },
    {
      "id": 4,
      "profile": {
        "name": "Mariana",
        "email": "mariana@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "education",
      "tags": ["patient", "dedicated", "mentor"],
      "workPercentual": 80
    },
    {
      "id": 5,
      "profile": {
        "name": "Bruno",
        "email": "bruno@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "medicine",
      "tags": ["caring", "precise", "dedicated"],
      "workPercentual": 95
    },
    {
      "id": 6,
      "profile": {
        "name": "Fernanda",
        "email": "fernanda@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "law",
      "tags": ["persuasive", "analytical", "strategic"],
      "workPercentual": 88
    },
    {
      "id": 7,
      "profile": {
        "name": "Ricardo",
        "email": "ricardo@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "business",
      "tags": ["entrepreneur", "visionary", "risk-taker"],
      "workPercentual": 92
    },
    {
      "id": 8,
      "profile": {
        "name": "Juliana",
        "email": "juliana@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "journalism",
      "tags": ["curious", "communicative", "investigative"],
      "workPercentual": 78
    },
    {
      "id": 9,
      "profile": {
        "name": "Lucas",
        "email": "lucas@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "engineering",
      "tags": ["technical", "solution-oriented", "logical"],
      "workPercentual": 86
    },
    {
      "id": 10,
      "profile": {
        "name": "Camila",
        "email": "camila@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "architecture",
      "tags": ["creative", "aesthetic", "planner"],
      "workPercentual": 83
    },
    {
      "id": 11,
      "profile": {
        "name": "Diego",
        "email": "diego@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "technology",
      "tags": ["problem-solver", "tech-savvy", "analytical"],
      "workPercentual": 87
    },
    {
      "id": 12,
      "profile": {
        "name": "Letícia",
        "email": "leticia@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "medicine",
      "tags": ["compassionate", "dedicated", "precise"],
      "workPercentual": 94
    },
    {
      "id": 13,
      "profile": {
        "name": "Gabriel",
        "email": "gabriel@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "photography",
      "tags": ["artistic", "creative", "observant"],
      "workPercentual": 76
    },
    {
      "id": 14,
      "profile": {
        "name": "Amanda",
        "email": "amanda@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "psychology",
      "tags": ["empathetic", "thoughtful", "analytical"],
      "workPercentual": 89
    },
    {
      "id": 15,
      "profile": {
        "name": "Pedro",
        "email": "pedro@gmail.com",
        "imgUrl": "profile.png"
      },
      "area": "data science",
      "tags": ["analytical", "logical", "data-driven"],
      "workPercentual": 91
    }
];