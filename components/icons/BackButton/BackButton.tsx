import styles from "./BackButton.module.scss";
export const BackButtonIcon = () => {
  return (
    <svg
      id={styles.back_button}
      viewBox="0 0 76 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id={styles.back_button_wrapper}>
        <g id={styles.back_button_inner}>
          <path
            d="M38 67.3971L73 36V49.7549L51.268 67.3971L73 82.6471V97L38 67.3971Z"
            fill="#1A1818"
          />
          <path
            d="M38 67.3971L73 36V49.7549L51.268 67.3971L73 82.6471V97L38 67.3971Z"
            stroke="black"
          />
          <path
            d="M38 67.3971L73 36V49.7549L51.268 67.3971L73 82.6471V97L38 67.3971Z"
            stroke="black"
            strokeOpacity="0.2"
          />
        </g>
        <g id="back_button">
          <path
            d="M1 68.3971L75 2V31.0882L29.0523 68.3971L75 100.647V131L1 68.3971Z"
            fill="#1A1818"
          />
          <path
            d="M1 68.3971L75 2V31.0882L29.0523 68.3971L75 100.647V131L1 68.3971Z"
            stroke="black"
          />
          <path
            d="M1 68.3971L75 2V31.0882L29.0523 68.3971L75 100.647V131L1 68.3971Z"
            stroke="black"
            strokeOpacity="0.2"
          />
        </g>
      </g>
    </svg>
  );
};
