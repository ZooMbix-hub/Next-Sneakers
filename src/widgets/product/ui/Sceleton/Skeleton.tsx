import cn from 'classnames';
import s from './Skeleton.module.css';

const SkeletonProductCard = () => (
  <div className={s.skeleton}>
    <div className={cn(s.image, s.shimmer)} />
    <div className={s.body}>
      <div className={s.shimmer} />
      <div className={s.shimmer} />
    </div>
    <div className={s.footer} >
      <div className={s.shimmer} />
      <div className={s.shimmer} />
    </div>
  </div>
)

export function Skeleton() {
  return (
    <div className={s.listSkeletons}>
      {
        Array.from({length: 10}).map((_, idx) => (
          <SkeletonProductCard key={idx} />
        ))
      }
    </div>
  );
}