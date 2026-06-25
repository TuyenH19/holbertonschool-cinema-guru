import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

function Filter({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) {
  return (
    <div className="filter-container">
      <div className="filter-fields">
        <SearchBar title={title} setTitle={setTitle}/>
        <div className="filter-controls">
          <Input
              label="Min Date"
              type="number"
              value={minYear}
              setValue={setMinYear}
          />
          <Input
              label="Max Date"
              type="number"
              value={maxYear}
              setValue={setMaxYear}
          />
          <SelectInput
            label="Sort"
            options={['latest', 'oldest', 'highestrated', 'lowestrated']}
            value={sort}
            setValue={setSort}
          />
        </div>
      </div>
      <ul className="filter-tags">
          {['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'].map((genreItem) => (
            <Tag
              key={genreItem}
              genre={genreItem}
              genres={genres}
              setGenres={setGenres}
            />
          ))}
      </ul>
    </div>
  )
}

export default Filter;
