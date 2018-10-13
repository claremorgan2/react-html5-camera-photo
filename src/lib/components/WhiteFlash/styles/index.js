const getWhiteFlashStyles = () => {
  return(
    `
      #white-flash.normal {
        position: absolute;
        height: 100%;
        width: 100%;
        opacity :1;
        transition:opacity .9s ease-out;
      }

      #white-flash.do-transition {
        opacity: 0;
        background: white;
      }
    `
  );
}

export default getWhiteFlashStyles;
