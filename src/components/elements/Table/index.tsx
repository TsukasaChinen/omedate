export const Table: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>お祝い事</th>
          <th>日　付</th>
          <th>説　明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>
              <b>お七夜</b>
              <i>（オシチヤ）</i>
            </span>
          </td>
          <td>2022/03/20（月）</td>
          <td>
            生まれて7日目のお祝い。赤ちゃんの名前を決め、お披露目する「命名式」を行ないます。
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <b>お宮参り</b>
              <i>（オミヤマイリ）</i>
            </span>
          </td>
          <td>2022/04/14（火）</td>
          <td>自分の生まれた土地の守り神に、 初めてお参りすること。</td>
        </tr>
        <tr>
          <td>
            <span>
              <b>端午の節句</b>
              <i>（タンゴノセック）</i>
            </span>
          </td>
          <td>2022/05/05（水）</td>
          <td>
            男の子は5月5日の端午の節句を祝います。無病息災と出世の願いを込めて、鯉のぼり。
          </td>
        </tr>
      </tbody>
    </table>
  );
};
