import { Text, Card, Button, Checkbox, Box } from "dracula-ui";
import useCopy from "@react-hook/copy";
import passfather from "passfather";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Copied to clipboard");
  const password = passfather();

  const [passwordConfig, setPasswordConfig] = useState({
    numbers: false,
    uppercase: false,
    lowercase: true,
    symbols: false, // Disable symbols
    length: 16,
  });

  function makePassword() {
    setPasswordConfig(password);
  }
  console.log("passwordConfig.numbers: " + passwordConfig.numbers);
  console.log("password: " + password);
  console.log("passwordConfig: " + passwordConfig);
  // useMemo
  const { copied, copy, reset } = useCopy(passwordConfig);

  function handleChange(event: {
    target: { name: any; value: any; type: any; checked: any };
  }) {
    const { name, value, type, checked } = event.target;
    setPasswordConfig((prevPassword) => {
      return {
        ...prevPassword,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  // makePassword();
  return (
    <div className="App">
      <div>
        <Card variant="subtle" color="pink" p="md" m="md">
          <Text color="pink" align="center" as="p" weight="bold">
            {" "}
            Password Generator{" "}
          </Text>
          <Text align="center" as="p">
            {() => {
              setPasswordConfig(password);
            }}
            {password}
            <a
              onClick={() => {
                copy();
                // notify();
              }}
            >
              {copied === false ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                  />
                </svg>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#8aff80"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                  <ToastContainer
                    position="top-left"
                    autoClose={500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    icon={true}
                  />
                  {/* <Text size="xs" color="cyanGreen">
                    copied!
                  </Text> */}
                </>
              )}
            </a>
          </Text>
          <center>
            <Button color="yellowPink" onClick={makePassword}>
              Generate
            </Button>
            <br />
            <br />
            <Box
              align="center"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Box mb="xs">
                <Checkbox
                  type="checkbox"
                  id="numbers"
                  color="white"
                  name="numbers"
                  onChange={handleChange}
                  checked={passwordConfig.numbers}
                  defaultChecked={true}
                />
                <label htmlFor="white" className="drac-text drac-text-white">
                  Numb3rs
                </label>
              </Box>
              <Box mb="xs">
                <Checkbox
                  id="cyan"
                  color="cyan"
                  name="cyan"
                  defaultChecked={true}
                />
                <label htmlFor="cyan" className="drac-text drac-text-white">
                  UPPERCASE
                </label>
              </Box>
              <Box mb="xs">
                <Checkbox
                  id="green"
                  color="green"
                  name="green"
                  defaultChecked={true}
                />
                <label htmlFor="green" className="drac-text drac-text-white">
                  lowercase
                </label>
              </Box>
              <Box mb="xs">
                <Checkbox
                  id="orange"
                  color="orange"
                  name="orange"
                  defaultChecked={true}
                />
                <label htmlFor="orange" className="drac-text drac-text-white">
                  $ymb0ls
                </label>
              </Box>
            </Box>
          </center>
        </Card>
      </div>
    </div>
  );
}

export default App;
