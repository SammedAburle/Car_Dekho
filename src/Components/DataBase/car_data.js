const car = [
    // ----------------maruti suzuki-----------------------
    {
        brand:"Maruti",
        model:"Swift",
        price:"6.49-9.60 Lakh",
        specification:{
            Engine:'1197 cc',
            Power:'68.8-80.46 bhp',
            Torque:'101.8Nm-111.7Nm',
            Seating_Capacity:'4 seater',
            Drive_Type:'FWD',
            Mileage:'24.8-25.75 kmpl',
        },
        image:"/assets/Images/cars/Maruti_suzuki_swift.webp"
    },
    {
        brand:"Maruti",
        model:"Baleno",
        price:"6.66-9.83 Lakh",
        specification:{
            Engine:'1197 cc',
            Power:'76.43-88.5 bhp',
            Torque:'98.5 Nm-113 Nm',
            Seating_Capacity:'4 seater',
            Drive_Type:'FWD',
            Mileage:'22.35-22-94 kmpl',
        },
        image:"/assets/Images/cars/Maruti_suzuki_Baleno.webp"
    },
    {
        brand:"Maruti",
        model:"Ertiga",
        price:"8.69-13.03 Lakh",
        specification:{
            Engine:'1462 cc',
            Power:'86.63-101.64 bhp',
            Torque:'121.5Nm-136.8Nm',
            Seating_Capacity:'7 Seater',
            Drive_Type:'FWD',
            Mileage:'20.3 kmpl',
        },
        image:"/assets/Images/cars/Maruti_suzuki_Ertiga.webp"
    },
    // -------------------Toyota---------------------
    {
        brand:"Toyota",
        model:"Fortuner",
        price:"33.43-51.44 Lakh",
        specification:{
            Engine:'2694- 2755css',
            Power:'163.6-201.15 bhp',
            Torque:'245 Nm- 500 Nm',
            Seating_Capacity:'7 seater',
            Drive_Type:'2WD/4WD',
            Mileage:'10 kmpl',
        },
        image:'/assets/Images/cars/Toyota_Fortuner.webp'
    },
    {
        brand:"Toyota",
        model:"Innova",
        price:"19.99-26.30 Lakh",
        specification:{
            Engine:'2393',
            Power:'147.51 bhp',
            Torque:'343 Nm',
            Seating_Capacity:'7 seater',
            Drive_Type:'RWD',
            Mileage:'8 kmpl',
        },
        image:'/assets/Images/cars/Toyota_Innova.webp'
    },
    {
        brand:"Toyota",
        model:" Vellfire",
        price:"1.22 - 1.32 Cr",
        specification:{
            Engine:'2487 cc',
            Power:'190.42 bhp',
            Torque:'240 Nm',
            Seating_Capacity:'7 seater',
            Drive_Type:'AWD',
            Mileage:'19 kmpl',
        },
        image:'/assets/Images/cars/Toyota_Vellfire'
    },
    // ---------------------Tata----------------------------
    {
        brand:"Tata",
        model:"Nexon",
        price:"8 - 15.50 Lakh",
        specification:{
            Engine:'1199 cc - 1497 cc',
            Power:'113.31 - 118.27 bhp',
            Torque:'170 Nm - 260 Nm',
            Seating_Capacity:'4 seater',
            Drive_Type:'FWD',
            Mileage:'17-24 kmpl',
        },
        image:'/assets/Images/cars/Tata_Nexon.webp'
    },
    {
        brand:"Tata",
        model:"Harrier",
        price:"14.99 - 25.89 Lakh",
        specification:{
            Engine:'1956 cc',
            Power:'167.62 bhp',
            Torque:'350 Nm',
            Seating_Capacity:'',
            Drive_Type:'5 seater',
            Mileage:'16.8 kmpl',
        },
        image:'/assets/Images/cars/Tata_Harrier.webp'
    },
    {
        brand:"Tata",
        model:"Safari",
        price:"15.49-26.89 Lakh",
        specification:{
            Engine:'1956 cc',
            Power:'167.62 bhp',
            Torque:'350 Nm',
            Seating_Capacity:'6-7 seater',
            Drive_Type:'FWD',
            Mileage:'16.3 kmpl',
        },
        image:'/assets/Images/cars/Tata_Safari.webp'
    },
    // ---------------------hyundai-------------------------
    {
        brand:"Hyundai",
        model:"Creta",
        price:"11 - 20.30 Lakh",
        specification:{
            Engine:'1482 cc - 1497 cc',
            Power:'113.18 - 157.57 bhp',
            Torque:'143.8 Nm - 253 Nm',
            Seating_Capacity:'',
            Drive_Type:'5 seater',
            Mileage:'17-21 kmpl',
        },
        image:'/assets/Images/cars/Hyundai_Creta.webp'
    },
    {
        brand:"Hyundai",
        model:"i20",
        price:"7.04 - 11.21 Lakh",
        specification:{
            Engine:'1197 cc',
            Power:'82 - 87 bhp',
            Torque:'114.7 Nm',
            Seating_Capacity:'4 seater',
            Drive_Type:'FWD',
            Mileage:'16 - 20 kmpl',
        },
        image:'/assets/Images/cars/Hyundai_I20.webp'
    },
    {
        brand:"Hyundai",
        model:"Verna",
        price:"11 - 17.42 Lakh",
        specification:{
            Engine:'1482 cc - 1497 cc',
            Power:'113.18 - 157.57 bhp',
            Torque:'143.8 Nm - 253 Nm',
            Seating_Capacity:'4 seater',
            Drive_Type:'FWD',
            Mileage:'18.6 - 20.6 kmpl',
        },
        image:'/assets/Images/cars/Hyundai_Verna.webp'
    },
    // ------------------- Mahindra------------------------
    {
        brand:" Mahindra",
        model:"XUV700",
        price:"13.99 - 26.04 Lakh",
        specification:{
            Engine:'1999 cc - 2198 cc',
            Power:'152 - 197 bhp',
            Torque:'360 Nm - 450 Nm',
            Seating_Capacity:'5-6-7 seater',
            Drive_Type:'FWD/AWD',
            Mileage:'17 kmpl',
        },
        image:'/assets/Images/cars/Mahindra_Xuv700.webp'
    },
    {
        brand:" Mahindra",
        model:"Thar",
        price:"s.11.35 - 17.60 Lakh",
        specification:{
            Engine:'1497 cc - 2184 cc',
            Power:'116.93 - 150.19 bhp',
            Torque:'300 Nm - 320 Nm',
            Seating_Capacity:'4 seater',
            Drive_Type:'4WD/RDW',
            Mileage:'/assets/Images/cars/Mahindra_Thar.webp',
        },
        image:''
    },
    {
        brand:" Mahindra",
        model:"Scorpio",
        price:"13.62 - 17.42 Lakh",
        specification:{
            Engine:'2184 cc',
            Power:'130 bhp',
            Torque:'300 Nm',
            Seating_Capacity:'',
            Drive_Type:'7-9 seater',
            Mileage:'14.44 kmpl',
        },
        image:'/assets/Images/cars/Mahindra_Scorpio.webp'
    },
  
  ]
  export default car;