import React from 'react';
import { ChiefsCards } from '../ChiefsCards/ChiefsCards';

interface Chief {
  name: string;
  img: string;
  recipiesCount: number;
  cuisine: string;
}

interface Props {
  chiefs: Chief[];
}
export const ChiefsSection: React.FC<Props> = ({chiefs}) => {
  
  return (
    <div className="chief-section">
      <h2 className="chief-section__title">
        Наші найкращі кухарі
      </h2>
      <div className="chief-section__container">
        {chiefs.map((chief) => (
          <ChiefsCards key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  )
};