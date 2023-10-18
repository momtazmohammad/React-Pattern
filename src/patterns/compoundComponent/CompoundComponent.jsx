import TabSwitcher, { Tab, TabPanel, Tabs } from "../../components/tab/tab";
const Home = () => (
  <div>
    <h3>London</h3>
    <p>London is the capital city of England.</p>
  </div>
);
const About = () => {
  return (
    <div>
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>
  );
};

const Contact = () => (
  <div>
    <h3>Tokyo</h3>
    <p>Tokyo is the capital of Japan.</p>
  </div>
);

function CompoundComponent() {
  return (
    <>
      <h3>TabSwitcher with Compound Components</h3>
      <TabSwitcher activeTab="Home">
        <Tabs>
          <Tab id="Home">Home</Tab>
          <Tab id="About">About</Tab>
          <Tab id="Contact">Contact</Tab>
        </Tabs>
        <TabPanel whenActive="Home">
          <Home />
        </TabPanel>
        <TabPanel whenActive="About">
          <About />
        </TabPanel>
        <TabPanel whenActive="Contact">
          <Contact />
        </TabPanel>
      </TabSwitcher>
    </>
  );
}
export default CompoundComponent;
