const getCircleButtonStyles = () => {
  return(
    `
      #container-circles {
        position: absolute;
        left: 50%;
        bottom: 90px;
      }

      #outer-circle {
        position: absolute;
        left: -37px;

        height: 75px;
        width: 75px;

        /*
          opacity of 0.4
        */
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 50%;

        z-index: 1;
      }

      #inner-circle {
        position: absolute;
        left: 50%;
        top: 38px;

        height: 44px;
        width: 44px;

        background: white;
        border-radius: 50%;

        /*
         Offset the position correctly with
         minus half of the width and minus half of the height
        */
        margin: -22px 0px 0px -22px;

        /*
          On the top of outer-circle
        */
        z-index: 2;
      }

      #inner-circle.is-clicked {
        height: 38px;
        width: 38px;
        margin: -19px 0px 0px -19px;
      }

    `
  );
}

export default getCircleButtonStyles;
