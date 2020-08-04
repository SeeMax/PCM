<?php /* Template Name: Contact */ get_header(); ?>
	<main class="contact-page">
		<?php while (have_posts()) : the_post(); ?>
      <section class="hero-section blue-shadow">
        <div class="content">
          <div class="contact-half contact-title c-width-33-3">
            <h1>Contact Us</h1>
            <hr>
            <p>
              PCM Services<br>
              <?php the_field('contact_address', 'option');?>
            </p>
          </div>

          <div class="contact-half c-width-33-3 blue-shadow contact-links">
            <div class="contact-subtitle">Phone</div> 
            <a href="tel:<?php the_field('phone_number', 'option');?>">
              <?php the_field('phone_number', 'option');?>
            </a>
          
            <div class="contact-subtitle">Fax</div> 
            <a href="tel:<?php the_field('fax_number', 'option');?>">
              <?php the_field('fax_number', 'option');?>
            </a>
            <div class="contact-subtitle">Email</div> 
            <a href="mailto:<?php the_field('contact_email', 'option');?>">
              <?php the_field('email_address', 'option');?>
            </a>
          </div>
        </div>
      </section>
      <?php the_content();?>
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>