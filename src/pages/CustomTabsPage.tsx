import React from 'react';
import Tabs from "../components/tabs/tabs.tsx";

interface Tab {
  id: number;
  label: string;
  title: string;
  content: string;
  checked: boolean;
}

const CustomTabsPage: React.FC = () => {
  const tabs: Tab[] = [
    {
      id: 1,
      label: 'Short',
      title: 'Short Section',
      content: '<p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>',
      checked: true
    }, {
      id: 2,
      label: 'Medium',
      title: 'Medium Section',
      content: '<p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p><p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>',
      checked: false
    }, {
      id: 3,
      label: 'Long',
      title: 'Long Section',
      content: '<p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p><p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p><p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p><p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>',
      checked: false
    }
  ];

  return (
    <div className="app-cont">
      <div className="container">
        <header>
          <h1>Custom Tabs</h1>
        </header>
        <div className="tabs-container">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

export default CustomTabsPage;
