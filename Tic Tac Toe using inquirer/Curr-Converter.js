import inquirer from "inquirer";
// Currency Converter
const currencyConverter = async () => {
    let Converstion = {
        AFN: {
            AFN: 1,
            AUD: 0.021,
            EUR: 0.013,
            INR: 1.126,
            JPY: 2.045,
            PKR: 3.796,
            SAR: 0.051,
            TRY: 0.421,
            USD: 0.014,
        },
        AUD: {
            AFN: 48.282,
            AUD: 1,
            EUR: 0.606,
            INR: 54.367,
            JPY: 98.733,
            PKR: 183.264,
            SAR: 2.46,
            TRY: 20.322,
            USD: 0.656,
        },
        EUR: {
            AFN: 79.619,
            AUD: 1.649,
            EUR: 1,
            INR: 89.653,
            JPY: 162.814,
            PKR: 302.28,
            SAR: 4.057,
            TRY: 33.512,
            USD: 1.082,
        },
        INR: {
            AFN: 0.888,
            AUD: 0.018,
            EUR: 0.011,
            INR: 1,
            JPY: 1.816,
            PKR: 3.371,
            SAR: 0.045,
            TRY: 0.374,
            USD: 0.0012,
        },
        JPY: {
            AFN: 0.489,
            AUD: 0.01,
            EUR: 0.006,
            INR: 0.551,
            JPY: 1,
            PKR: 1.856,
            SAR: 0.025,
            TRY: 0.206,
            USD: 0.007,
        },
        PKR: {
            AFN: 0.263,
            AUD: 0.005,
            EUR: 0.003,
            INR: 0.297,
            JPY: 0.539,
            PKR: 1,
            SAR: 0.013,
            TRY: 0.111,
            USD: 0.004,
        },
        SAR: {
            AFN: 19.627,
            AUD: 0.406,
            EUR: 0.247,
            INR: 22.1,
            JPY: 40.134,
            PKR: 74.496,
            SAR: 1,
            TRY: 8.261,
            USD: 0.267,
        },
        TRY: {
            AFN: 2.376,
            AUD: 0.049,
            EUR: 0.03,
            INR: 2.675,
            JPY: 4.858,
            PKR: 9.018,
            SAR: 0.121,
            TRY: 1,
            USD: 0.032,
        },
        USD: {
            AFN: 73.568,
            AUD: 1.524,
            EUR: 0.924,
            INR: 82.839,
            JPY: 150.44,
            PKR: 279.24,
            SAR: 3.748,
            TRY: 30.965,
            USD: 1,
        },
    };
    const answers = await inquirer.prompt([{
            type: "list",
            name: "from",
            message: "Select Your Cuurency!",
            choices: ["AFN", "AUD", "INR", "JPY", "PKR", "SAR", "TRY", "USD"],
        },
        {
            type: "list",
            name: "to",
            message: "Select Conversion Cuurency!",
            choices: ["AFN", "AUD", "INR", "JPY", "PKR", "SAR", "TRY", "USD"],
        },
        {
            type: "number",
            name: "amount",
            message: "Enter amount you want to convert"
        }
    ]);
    const { from, to, amount } = answers;
    if (from && to && amount) {
        const result = Converstion[from][to] * amount;
        console.log(`Your Conversion amount  ${from} is converted in ${to}. The Converted Amount is: ${result} in ${to}`);
    }
    else {
        console.log("Please Enter a Valid Input.");
    }
};
export { currencyConverter };
