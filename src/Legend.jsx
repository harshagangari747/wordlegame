export default function Legend() {
  return (
    <table className="table">
      <tr>
        <td colSpan={2}>
          <b>How to Play?</b>
        </td>
      </tr>
      <tr>
        <td colspan={2}>
          <li>
            The aim of the game is to guess a five letter word in six guess
            attempts. For each guess, the background of the letter appear in a
            color indicating whether your guess is correct or incorrect. Follow
            the legend to know what each color means
          </li>
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <li>
            After you have entered the word, press 'Guess' to reveal the letters
            and its positions
          </li>
        </td>
      </tr>

      <tr>
        <td className="green color" height="20px" width="20px"></td>
        <td>It means you guessed one of the letter and in correct position</td>
      </tr>
      <tr>
        <td className="yellow color" height="20px" width="20px"></td>
        <td>
          It means you got one of the letter in the word, but in wrong position
        </td>
      </tr>
      <tr>
        <td className="red color" height="20px" width="20px"></td>
        <td>The letter you entered is not in the word</td>
      </tr>

      <tr>
        <td colspan={2}>
          <li>
            Start by entering a random five letter word or think strategically
          </li>
        </td>
      </tr>
    </table>
  );
}
