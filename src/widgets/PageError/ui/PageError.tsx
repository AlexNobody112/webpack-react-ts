import { classNames } from 'shared/lib/heplers/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
  children?: React.ReactNode;
}

export const PageError = (props: PageErrorProps) => {
  const { className } = props;
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>Unexpected Error occured</p>
      <Button onClick={reloadPage}>
        Reload page
      </Button>
    </div>
  );
};
