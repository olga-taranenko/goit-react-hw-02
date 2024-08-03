import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={css.buttonWrapper}>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.button}
          type="button"
          onClick={() => {
            updateFeedback("resetAll");
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
