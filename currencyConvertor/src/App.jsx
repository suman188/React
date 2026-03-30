import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1); // default 1 rakho better UX ke liye
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  // ✅ Swap FIXED
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // ✅ Auto convert (BEST PRACTICE)
  useEffect(() => {
    if (!currencyInfo || !currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  }, [amount, from, to, currencyInfo]);

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/27920274/pexels-photo-27920274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm bg-white/30">
        
        <div className="w-full mb-2">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>

        {/* ✅ Swap Button FIXED */}
        <div className="relative w-full h-0.5">
          <button
            type="button"
            onClick={swap} // 🔥 yaha typo tha (noClick ❌)
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
          >
            Swap
          </button>
        </div>

        <div className="w-full mt-2 mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
        </div>

        <button
          type="button"
          onClick={() =>
            setConvertedAmount(amount * (currencyInfo[to] || 0))
          }
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;