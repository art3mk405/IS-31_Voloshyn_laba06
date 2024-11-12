const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

function applyDiscount(medicines) {
    console.log("Всі медикаменти:");
    
    const medicinesWithId = medicines.map((medicine, index) => ({
        id: index + 1,  
        name: medicine.name,
        price: medicine.price,
    }));
    console.log(medicinesWithId);

    const discountedMedicines = medicinesWithId.map(medicine => {
        if (medicine.price > 300) {
            return Object.assign({}, medicine, {  
                price: medicine.price * 0.7,  // Знижка 30%
            });
        }
        return medicine;
    });

    console.log("Медикаменти із знижкою:");
    console.log(discountedMedicines);
}

applyDiscount(medicines);
