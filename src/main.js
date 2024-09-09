import MyButton from './MyButton.svelte';
// import App from './App.svelte';

// const app = new App({
// 	target: document.body
// });

// export default app;
// Define a custom element for the MyButton component
customElements.define('my-button', class extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._svelteComponent = new MyButton({
      target: this._shadowRoot,
      props: { label: this.getAttribute('label') || 'Click me' }
    });
  }

  static get observedAttributes() {
    return ['label'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label') {
      this._svelteComponent.$set({ label: newValue });
    }
  }
});
