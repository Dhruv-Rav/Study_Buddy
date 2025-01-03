import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';

function CodeEditor() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  return (
    <Tabs>
      <TabList>
        <Tab>HTML</Tab>
        <Tab>CSS</Tab>
        <Tab>JS</Tab>
      </TabList>

      <TabPanel>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="w-full h-64 p-2 bg-gray-800 text-white"
          placeholder="Write HTML here..."
        />
      </TabPanel>
      <TabPanel>
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          className="w-full h-64 p-2 bg-gray-800 text-white"
          placeholder="Write CSS here..."
        />
      </TabPanel>
      <TabPanel>
        <textarea
          value={js}
          onChange={(e) => setJs(e.target.value)}
          className="w-full h-64 p-2 bg-gray-800 text-white"
          placeholder="Write JS here..."
        />
      </TabPanel>
    </Tabs>
  );
}

export default CodeEditor;