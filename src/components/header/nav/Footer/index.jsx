import styles from './style.module.scss';
import SocialIcons from '@/components/SocialIcons';

export default function Index() {
  return (
    <div className={styles.footer}>
      <SocialIcons
        link="https://linkedin.com/in/romariojs94"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
          >
            <path
              d="M7 10V17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00801 7L6.99902 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
      <SocialIcons
          link="https://behance.net/romariojs94"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M6.75085 11.985V9.00492C6.75085 8.72282 6.9824 8.49414 7.26802 8.49414H9.24582C9.68571 8.49414 10.1378 8.56982 10.4656 8.8595C10.8163 9.16935 11.1564 9.64935 11.1395 10.2909C11.1199 11.0391 10.5736 11.9234 9.77316 11.985C8.97271 12.0466 8.22065 11.985 6.75085 11.985ZM6.75085 11.985V14.9675C6.75085 15.2496 6.98243 15.478 7.26804 15.4808C8.40871 15.4917 9.07239 15.5322 9.77316 15.4783C10.5736 15.4166 11.1199 14.5323 11.1395 13.7841C11.1564 13.1426 10.8163 12.6626 10.4656 12.3527C10.1378 12.063 9.68571 11.9873 9.24582 11.9873L6.75085 11.985ZM16.7954 14.9655C16.3572 15.3901 14.2227 16.2293 13.4537 14.0205C13.3738 13.8 13.3102 13.3244 13.3473 12.957M13.3473 12.957C13.4106 12.3314 13.6867 11.4539 14.7115 11.0958C16.1791 10.583 17.102 12.0065 17.341 12.957H13.3473ZM14.5888 9.00095H15.949"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
    </div>
  );
}
