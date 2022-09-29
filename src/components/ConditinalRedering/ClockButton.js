import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    }
    return true;
  }

  render() {
    console.log("button componenet rendered");
    const { change, locale, show , enable} = this.props;
    if (!enable){
      return null 
    }
    return (
      <>
        {" "}
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "Change The Clock" : "গড়ি পরিবর্তন করুন"}
        </button>
        {show && <h3>Hello Developer Sifat</h3>}
      </>
    );
  }
}

export default Button;
