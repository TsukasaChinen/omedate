export const DefaultText: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <p>
        生年月日と性別を入力するとお子さまの
        <span className="red">「誕生から成人まで」</span>の<br />
        お祝い事の日付を表示します。
      </p>
    </div>
  );
};
